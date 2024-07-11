import { v4 as uuidv4 } from 'uuid'
import { createHash, pbkdf2Sync } from 'crypto'


import IClientSecret from '@/app/lib/interfaces/client-secret.interface'


export default class ClientSecret implements IClientSecret {
    id: string
    secret: string
    createdAt: Date
    updatedAt: Date

    constructor(clientId: string) {
        this.id = uuidv4()
        this.secret = this.newSecret(clientId)
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    newSecret(clientId: string): string {
        try {
            // generate a random salt
            let salt = createHash('sha256').update(clientId).digest('hex')

            // hash the name and url to create a unique client secret
            let secret = createHash('sha256').update(clientId).digest('hex')

            // hash
            let hash = pbkdf2Sync(secret, salt, 100000, 64, 'sha512')

            return hash.toString('hex')
        } catch (error) {
            console.error('Error generating client secret', error)
            return '' // or handle the error in a different way
        }
    }
}