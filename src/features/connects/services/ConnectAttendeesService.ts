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

        const isAttending = await this.connectAttendeesRepository.isUserAttending(user.id, connectId)

        if ( ConnectAttendeePolicy.canConfirm(user, connect, isAttending) ) {
            await this.connectAttendeesRepository.insert(user.id, connect.id)
            await this.notificationService.createAndNotify({
                userId: connect.createdBy,
                actorName: user.name,
                message: 'Asistencia confirmada al CoreConnect: ',
                target: connect.title
            })

            return {
                success: `Asistencia confirmada al CoreConnect: ${connect.title}`,
                error: '',
                newPermissions: {
                    canConfirm: false,
                    canCancel: true
                }
            }
        }

        if ( ConnectAttendeePolicy.canCancel(user, connect, isAttending) ) {
            await this.connectAttendeesRepository.remove(user.id, connect.id)
            return {
                success: `Asistencia Cancelada al CoreConnect: ${connect.title}`,
                error: '',
                newPermissions: {
                    canConfirm: true,
                    canCancel: false
                }
            }
        }
    }
}

export const connectAttendeesService = new ConnectAttendeesService(connectAttendeesRepository, connectRepository, notificationService)
