import IContract from '@/app/lib/interfaces/contract.interface'
import IAuthorizationServer from '@/app/lib/interfaces/authorization-server.interface'
import IScope from '@/app/lib/interfaces/scope.interface'
import IEffectiveness from '@/app/lib/interfaces/effectiveness.interface'


export default class Contract implements IContract {
    hash: string
    resource: string
    client: string
    scope: IScope[]
    effectiveness: IEffectiveness
    authorizedBy: IAuthorizationServer

    constructor(hash: string, resource: string, client: string, scope: IScope[], effectiveness: IEffectiveness, authorizedBy: IAuthorizationServer) {
        this.hash = hash
        this.resource = resource
        this.client = client
        this.scope = scope
        this.effectiveness = effectiveness
        this.authorizedBy = authorizedBy
    }
}