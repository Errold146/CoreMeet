import { headers } from 'next/headers';

import { auth } from '@/src/lib/auth';
import { ProfileInput } from '../schemas/profileSchema';
import { IProfileRepository, profileRepository } from './ProfileRepository';

class ProfileService {
    constructor(
        private profileRepository: IProfileRepository
    ){}

    async getProfileDetails(profileId: string) {
        return await this.profileRepository.findFullProfileById(profileId)
    }

    async updateProfile(data: ProfileInput) {
        const { name, bio, image } = data
        await auth.api.updateUser({
            body: {
                name,
                bio,
                image
            },
            headers: await headers()
        })
    }
}

export const profileService = new ProfileService(profileRepository)
