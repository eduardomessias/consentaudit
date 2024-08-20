import Client from '../lib/classes/client.class'
import ClientSecret from '../lib/classes/client-secret.class'
import ClientApplication from '../lib/classes/client-application.class'


import ClientRepository from '../lib/repositories/client.repository'
import ClientSecretRepository from '../lib/repositories/client-secret.repository'
import ClientApplicationRepository from '../lib/repositories/client-application.repository'


export interface IPartialClientApplication {
    id: string
    name: string
    callback: string
}


export async function createClientApplication(data: FormData): Promise<IPartialClientApplication> {
    console.log('Creating client application...', data)

    try {
        const client = await ClientRepository.save(new Client())
        ClientSecretRepository.save(new ClientSecret(client.id, client.salt))
        const clientApplication = await ClientApplicationRepository.save(new ClientApplication(client.id, name, callback))

        console.log('Client application created', clientApplication)

        return {
            id: clientApplication.id,
            name: clientApplication.name,
            callback: clientApplication.callback,
        }
    } catch (error) {
        console.error('Error creating client application', error)
        throw error
    }
}