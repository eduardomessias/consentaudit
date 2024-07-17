'use server'


import ClientApplication from '@/app/lib/classes/client-application.class'
import ClientApplicationRepository from '@/app/lib/repositories/client-application.repository'


export async function retrieveClientApplications(): Promise<ClientApplication[]> {
    try {
        const clientApplications = await ClientApplicationRepository.findMany()
        return clientApplications
    } catch (error) {
        throw error
    }
}