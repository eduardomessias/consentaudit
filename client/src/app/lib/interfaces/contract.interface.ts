import IAuthorizationServer from '@/app/lib/interfaces/authorization-server.interface'
import IScope from '@/app/lib/interfaces/scope.interface'
import IEffectiveness from '@/app/lib/interfaces/effectiveness.interface'

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