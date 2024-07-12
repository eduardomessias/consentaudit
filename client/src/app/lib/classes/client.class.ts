import { v4 as uuidv4 } from 'uuid'
import { createHash } from 'crypto'


import IClient from '../interfaces/client.interface'


export default class Client implements IClient {
    id: string
    salt: string
    createdAt: Date
    updatedAt: Date


    constructor() {
        this.id = uuidv4()
        this.salt = this.newSalt()
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }


    newSalt(): string {
        return createHash('sha256').update(this.id).digest('hex')
    }
}