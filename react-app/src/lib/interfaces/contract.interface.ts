import IAuthorizationServer from './authorization-server.interface'
import IScope from './scope.interface'
import IEffectiveness from './effectiveness.interface'

export default interface IContract {
    hash: string
    resource: string
    client: string
    scope: IScope[]
    effectiveness: IEffectiveness
    authorizedBy: IAuthorizationServer
}


export interface IContractStatic {
    newFromSmartContract(contract: any): IContract
}