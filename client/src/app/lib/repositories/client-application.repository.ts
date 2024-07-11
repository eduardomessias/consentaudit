import prisma from '@/app/data/context/postgres/prisma'
import IClientApplication from '@/app/lib/interfaces/client-application.interface'


export default class ClientApplicationRepository {
    static save(clientApplication: IClientApplication): Promise<IClientApplication> {
        console.log('Saving client application...', clientApplication)
        prisma.clientApplication.create({
            data: {
                name: clientApplication.name,
                callback: clientApplication.callback,
                clientId: clientApplication.clientId
            }
        }).then((_clientApplication) => {
            console.log('Client application saved', _clientApplication)
            clientApplication.id = _clientApplication.id
        }).catch((error) => {
            console.error('Error saving client application', error)
        }).finally(() => {
            return clientApplication
        })


        return new Promise<IClientApplication>((resolve, reject) => {
            resolve(clientApplication)
        })
    }
}