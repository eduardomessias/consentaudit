import { v4 as uuidv4 } from 'uuid'


import IClientApplication from '../interfaces/client-application.interface'
import IAuthorizationServer from '../interfaces/authorization-server.interface'


export default class ClientApplication implements IClientApplication {
    id: string
    name: string
    callback: string
    clientId: string
    createdAt: number
    updatedAt: number
    authorizationServers: IAuthorizationServer[]

    constructor(clientId: string, name: string, callback: string) {
        this.id = uuidv4()
        this.clientId = clientId
        this.name = name
        this.callback = callback
        this.createdAt = Date.now()
        this.updatedAt = Date.now()
        this.authorizationServers = []
    }
}