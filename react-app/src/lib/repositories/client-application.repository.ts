import prisma from '../../data/context/postgres/prisma'
import IClientApplication from '../interfaces/client-application.interface'


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


    static findMany(): Promise<IClientApplication[]> {
        return prisma.clientApplication
            .findMany()
            .then((_clientApplications) => {
                return _clientApplications.map((clientApplication) => {
                    return {
                        id: clientApplication.clientId,
                        name: clientApplication.name,
                        callback: clientApplication.callback,
                        clientId: clientApplication.clientId,
                        authorizationServers: [],
                        createdAt: clientApplication.createdAt.getTime(),
                        updatedAt: clientApplication.updatedAt.getTime()
                    }
                }, [])
            }).catch((error) => {
                throw error
            })
            .finally(() => {
                return []
            })
    }

    static read(): IClientApplication[] {
        const clientApplications: IClientApplication[] = prisma.clientApplication.findMany()
        return clientApplications
    }
}