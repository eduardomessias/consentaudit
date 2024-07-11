import IAuthorizationServer from '@/app/lib/interfaces/authorization-server.interface'

export default interface IClientApplication {
    id: string
    name: string
    callback: string
    clientId: string
    authorizationServers: IAuthorizationServer[]
    createdAt: number
    updatedAt: number
}