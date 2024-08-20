import IContract from '../interfaces/contract.interface'
import IAuthorizationServer from '../interfaces/authorization-server.interface'
import IScope from '../interfaces/scope.interface'
import IEffectiveness from '../interfaces/effectiveness.interface'
import Scope from '../classes/scope.class'
import Effectiveness from '../classes/effectiveness.class'
import AuthorizationServer from '../classes/authorization-server.class'
import { authorizationServers } from '../../data/context/offline/authorization-servers'
import bytes32ToString from '../utils/bytes32-to-string'
import epochToUtc from '../utils/epoch-to-utc'


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
        //let hash = 
        let tag: string = bytes32ToString(contract.auth_server_tag).replace(/\x00/g, '')
        let url: string = bytes32ToString(contract.auth_server_url).replace(/\x00/g, '')
        let clientId = bytes32ToString(contract.client_id)
        let scope = Scope.splitFromString(bytes32ToString(contract.scope))
        let from = epochToUtc(contract.from)
        let to = epochToUtc(contract.to)
        let effectiveness = new Effectiveness(from, to)
        let authorizationServer: IAuthorizationServer | undefined = AuthorizationServer.findByUrlAndAlias(authorizationServers, url, tag)
            || new AuthorizationServer(tag, url, tag)
        return new Contract('', '', clientId, scope, effectiveness, authorizationServer)
    }
}