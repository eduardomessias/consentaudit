'use server'


import Client from '@/app/lib/classes/client.class'
import ClientSecret from '@/app/lib/classes/client-secret.class'
import ClientApplication from '@/app/lib/classes/client-application.class'


import ClientRepository from '@/app/lib/repositories/client.repository'
import ClientSecretRepository from '@/app/lib/repositories/client-secret.repository'
import ClientApplicationRepository from '@/app/lib/repositories/client-application.repository'
import { revalidatePath } from 'next/cache'


export async function createClientApplication(previousState: any, formData: FormData): Promise<any> {
    console.log('Creating client application...', formData)


    let name = formData.get('name')?.toString() || ''
    let callback = formData.get('callback')?.toString() || ''


    try {
        const client = await ClientRepository.save(new Client())
        ClientSecretRepository.save(new ClientSecret(client.id, client.salt))
        const clientApplication = await ClientApplicationRepository.save(new ClientApplication(client.id, name, callback))

        console.log('Client application created', clientApplication)
        revalidatePath('/application/registry')
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