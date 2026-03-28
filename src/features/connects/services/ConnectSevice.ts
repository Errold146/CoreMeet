import { User } from "better-auth";
import { CommunityPolicy } from "../../communities";
import { ConnectInput } from "../schemas/connectSchema";
import { connectRepository, IConnectRepository } from "./ConnectRepository";
import { communityRepository, ICommunityRepository } from "../../communities/services/CommunityRepository";

class ConnectService {

    constructor(
        private connectRepository: IConnectRepository,
        private communityRepository: ICommunityRepository
    ){}

    async createConnect(data: ConnectInput, user: User) {
        const community = await this.communityRepository.findById(data.communityId)
        if ( !community || !CommunityPolicy.isAdmin(user, community) ) throw new Error('Acceso Denegado.');

        await this.connectRepository.insert({...data, createdBy: user.id})
    }
}

export const connectService = new ConnectService(connectRepository, communityRepository)
