import { User } from "better-auth";
import { notFound } from "next/navigation";

import { ConnectPolicy } from "../policies";
import { InsertBasicConnect } from "../types";
import { CommunityPolicy } from "../../communities";
import { ConnectInput } from "../schemas/connectSchema";
import { ConnectAttendeePolicy } from "../policies/ConnectAttendeesPolicy";
import { connectRepository, IConnectRepository } from "./ConnectRepository";
import { deleteFileFromUploadThing } from "@/src/shared/utils/uploadthing-utils";
import { connectAttendeesRepository, IConnectAttendeesRepository } from './ConnectAttendeesRepository';
import { communityRepository, ICommunityRepository } from "../../communities/services/CommunityRepository";

class ConnectService {

    constructor(
        private connectRepository: IConnectRepository,
        private communityRepository: ICommunityRepository,
        private connectAttendeesRepository: IConnectAttendeesRepository
    ){}

    async createConnect(data: ConnectInput, user: User) {
        const community = await this.communityRepository.findById(data.communityId)
        if ( !community || !CommunityPolicy.isAdmin(user, community) ) throw new Error('Acceso Denegado.');

        await this.connectRepository.insert({...data, createdBy: user.id})
    }

    async getUncommingConnectsByUser(user: User) {
        const upcomingConnects = await this.connectRepository.findUncommingByUserId(user.id)

        const enriched = await Promise.all(upcomingConnects.map(async connect => {

            const attendanceCount = await this.connectAttendeesRepository.findAttendeesCount(connect.id)

            return {
                data: connect,
                attendanceCount,
                context: {
                    isAdmin: ConnectPolicy.isAdmin(user, connect)
                },
                permissions: {
                    canViewAttendes: ConnectPolicy.canViewAttendes(user, connect),
                    canEdit: ConnectPolicy.canEdit(user, connect),
                    canDelete: ConnectPolicy.canDelete(user, connect)
                }
            }
        }))

        return enriched
    }

    async getConnectById(connectId: string) {
        const connect = await this.connectRepository.findById(connectId)
        if ( !connect ) notFound();

        return connect
    }

    async getConnectWithDetails(connectId: string, user?: User) {
        const connect = await this.connectRepository.findFullById(connectId)
        if ( !connect ) notFound();

        const isPastConnect = ConnectPolicy.isPastConnect(connect)

        if ( !user ) {
            return {
                data: connect,
                context: {
                    isAdmin: false,
                    isPastConnect,
                    isAttending: false
                },
                permission: null
            }
        }

        const isAttending = await this.connectAttendeesRepository.isUserAttending(user.id, connect.id)
        const isAdmin = ConnectPolicy.isAdmin(user, connect)

        return {
            data: connect,
            context: {
                isAdmin,
                isPastConnect,
                isAttending
            },
            permissions: {
                canConfirm: ConnectAttendeePolicy.canConfirm(user, connect, isAttending),
                canCancel: ConnectAttendeePolicy.canCancel(user, connect, isAttending)
            }
        }
    }

    async getConnectWitjPermissions(connectId: string, user: User) {
        const connect = await this.getConnectById(connectId)

        return {
            data: connect,
            context: {
                isAdmin: ConnectPolicy.isAdmin(user, connect)
            },
            permmissions: {
                canViewAttendes: ConnectPolicy.canViewAttendes(user, connect),
                canEdit: ConnectPolicy.canEdit(user, connect),
                canDelete: ConnectPolicy.canDelete(user, connect)
            }
        }
    }

    async updateConnect(connectId: string, data: ConnectInput, user: User) {
        const existingConnect = await this.getConnectById(connectId)

        if (!ConnectPolicy.canEdit(user, existingConnect)) {
            throw new Error('Acceso Denegado.')
        }

        const mainFields: Partial<InsertBasicConnect> = {
            title: data.title,
            details: data.details,
            image: data.image,
            communityId: data.communityId,
            categoryId: data.categoryId,
            availableSeats: data.availableSeats,
            date: data.date,
            time: data.time,
            virtual: data.virtual,
            meetingUrl: data.virtual ? (data.meetingUrl ?? null) : null,
        }

        await this.connectRepository.update(connectId, mainFields)

        if (!data.virtual && data.location) {
            await this.connectRepository.insertLocation(connectId, data.location)
        } else if (data.virtual && existingConnect.location) {
            await this.connectRepository.deleteLocation(connectId)
        }

        if (existingConnect.image !== data.image) {
            try {
                await deleteFileFromUploadThing(existingConnect.image)
            } catch (error) {
                console.error('Error al eliminar la imagen anterior del CoreConnect:', error)
            }
        }
    }

    async getConnectAttendees(connectId: string, user: User) {
        const connect = await this.getConnectById(connectId)
        if ( !ConnectPolicy.canViewAttendes(user, connect) ) throw new Error('Acceso Denegado.');

        const attendees = await this.connectAttendeesRepository.findAttendeesByConnectId(connect.id)

        return {
            connect,
            attendees
        }
    }

    async deleteConnect(connectId: string, password: string, user: User) {
        const connect = await this.getConnectById(connectId)

        if ( !ConnectPolicy.canDelete(user, connect) ) throw new Error('Acceso Denegado.');

        const { checkPassword } = await import('@/src/shared/utils/auth')
        const isValidPassword = await checkPassword(password)
        if ( !isValidPassword ) {
            return {
                error: 'Password Inválido.',
                success: ''
            }
        }

        try {
            await deleteFileFromUploadThing(connect.image)
        } catch {
            // Si falla la eliminación de imagen, continuamos
        }

        await this.connectRepository.delete(connectId)

        return {
            error: '',
            success: 'CoreConnect eliminado correctamente.'
        }
    }
}

export const connectService = new ConnectService(connectRepository, communityRepository, connectAttendeesRepository)
