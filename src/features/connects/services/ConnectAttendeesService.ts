import { User } from "better-auth";

import { ConnectAttendeePolicy } from "../policies/ConnectAttendeesPolicy";
import { connectRepository, IConnectRepository } from './ConnectRepository';
import { connectAttendeesRepository, IConnectAttendeesRepository } from "./ConnectAttendeesRepository";
import { INotificationService, notificationService } from '../../notifications/services/NotificationService';

class ConnectAttendeesService {
    constructor(
        private connectAttendeesRepository: IConnectAttendeesRepository,
        private connectRepository: IConnectRepository,
        private notificationService: INotificationService
    ){}

    async toggleAttendance(connectId: string, user: User) {
        const connect = await this.connectRepository.findById(connectId)
        if ( !connect ) throw new Error('CoreConnect Inválido.');

        const [isAttending, attendanceCount] = await Promise.all([
            this.connectAttendeesRepository.isUserAttending(user.id, connectId),
            this.connectAttendeesRepository.findAttendeesCount(connectId)
        ])

        if ( ConnectAttendeePolicy.canConfirm(user, connect, isAttending, attendanceCount) ) {
            await this.connectAttendeesRepository.insert(user.id, connect.id)
            await this.notificationService.createAndNotify({
                userId: connect.createdBy,
                actorName: user.name,
                message: 'Asistencia confirmada al CoreConnect: ',
                target: connect.title
            })

            const remainingAfter = connect.availableSeats - (attendanceCount + 1)
            return {
                success: `Asistencia confirmada al CoreConnect: ${connect.title}`,
                error: '',
                newPermissions: {
                    canConfirm: false,
                    canCancel: true
                },
                remainingSeats: remainingAfter
            }
        }

        if ( ConnectAttendeePolicy.canCancel(user, connect, isAttending) ) {
            await this.connectAttendeesRepository.remove(user.id, connect.id)
            return {
                success: `Asistencia Cancelada al CoreConnect: ${connect.title}`,
                error: '',
                newPermissions: {
                    canConfirm: attendanceCount - 1 < connect.availableSeats,
                    canCancel: false
                },
                remainingSeats: connect.availableSeats - (attendanceCount - 1)
            }
        }

        return {
            error: 'No hay cupos disponibles para este CoreConnect.',
            success: '',
            newPermissions: {
                canConfirm: false,
                canCancel: false
            },
            remainingSeats: 0
        }
    }
}

export const connectAttendeesService = new ConnectAttendeesService(connectAttendeesRepository, connectRepository, notificationService)
