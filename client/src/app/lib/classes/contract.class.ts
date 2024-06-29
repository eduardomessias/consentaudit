import IContract from '@/app/lib/interfaces/contract.interface'
import IAuthorizationServer from '@/app/lib/interfaces/authorization-server.interface'
import IScope from '@/app/lib/interfaces/scope.interface'
import IEffectiveness from '@/app/lib/interfaces/effectiveness.interface'
import Scope from '@/app/lib/classes/scope.class'
import Effectiveness from '@/app/lib/classes/effectiveness.class'
import AuthorizationServer from '@/app/lib/classes/authorization-server.class'

import bytes32ToString from '@/app/lib/utils/bytes32-to-string'
import epochToUtc from '@/app/lib/utils/epoch-to-utc'


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

    static newFromSmartContract(contract: any): IContract {
        return new Contract(
            '',
            '',
            bytes32ToString(contract.client_id),
            bytes32ToString(contract.scope).split(',').map((scope: string) => {
                let [permissions, content] = scope.split(':')
                return new Scope(content, permissions)
            }, []),
            new Effectiveness(epochToUtc(contract.from), epochToUtc(contract.to)),
            new AuthorizationServer('', bytes32ToString(contract.auth_server_url), bytes32ToString(contract.auth_server_tag))
        )
    }
}