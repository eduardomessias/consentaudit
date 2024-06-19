import IAuthorizationServer from '@/app/lib/interfaces/authorizationServer.interface'
import IScope from '@/app/lib/interfaces/scope.interface'

export default interface IContract {
    hash: string
    client: string
    scope: IScope[]
    expiration: Date
    authorizedBy: IAuthorizationServer
}