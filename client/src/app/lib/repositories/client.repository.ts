import prisma from '@/app/data/context/postgres/prisma'
import IClient from '@/app/lib/interfaces/client.interface'
import { Prisma } from '@prisma/client'


export default class ClientRepository {
    static save(client: IClient): Promise<IClient> {
        console.log('Saving client...', client)
        // save client to the database
        prisma.client.create({
            data: {
                salt: client.salt,
            }
        }).then((_client) => {
            console.log('Client saved', _client)
            client.id = _client.id
        }).catch((error) => {
            console.error('Error saving client', error)
        }).finally(() => {
            return client
        })


        return new Promise((resolve, reject) => {
            resolve(client)
        })
    }
}