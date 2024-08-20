import ClientApplication from '../lib/classes/client-application.class'
import ClientApplicationRepository from '../lib/repositories/client-application.repository'


export async function retrieveClientApplications(): Promise<ClientApplication[]> {
    const clientApplications = await ClientApplicationRepository.findMany()
    return clientApplications
}