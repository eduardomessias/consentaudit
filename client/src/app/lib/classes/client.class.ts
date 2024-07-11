import { v4 as uuidv4 } from 'uuid'


import IClient from '../interfaces/client.interface'

export default class Client implements IClient {
    id: string
    createdAt: Date
    updatedAt: Date

    constructor() {
        this.id = uuidv4()
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}