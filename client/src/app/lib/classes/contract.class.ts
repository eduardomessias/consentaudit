import IContract from '@/app/lib/interfaces/contract.interface'
import IAuthorizationServer from '@/app/lib/interfaces/authorizationServer.interface'
import IScope from '@/app/lib/interfaces/scope.interface'


export default class Contract implements IContract {
    hash: string
    client: string
    scope: IScope[]
    expiration: Date
    authorizedBy: IAuthorizationServer

    constructor(hash: string, client: string, scope: IScope[], expiration: Date, authorizedBy: IAuthorizationServer) {
        this.hash = hash
        this.client = client
        this.scope = scope
        this.expiration = expiration
        this.authorizedBy = authorizedBy
    }
}