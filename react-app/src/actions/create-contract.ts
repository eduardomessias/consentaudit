import SmartContract from '../lib/classes/smart-contract.class'
import Scope from '../lib/classes/scope.class'
import IScope from '../lib/interfaces/scope.interface'


export async function createContract(resourceIdentifier: string, clientId: string, authServerUrl: string, authServerTag: string, from: number, to: number, scope: string, storeInBlockchain: boolean): Promise<any> {
    // data transformation
    const scopes: IScope[] = scope?.split(',').map((item: string) => {
        const [permission, content] = item.split(':')
        return new Scope(content, permission)
    }) || []
    console.log('Identified scopes', scopes)

    if (!storeInBlockchain) {
        console.log('Contract transformation complete', {
            resourceIdentifier,
            clientId,
            authServerUrl,
            authServerTag,
            from,
            to,
            scopes
        })
        return
    }

    try {
        // contract creation
        const smartContract = new SmartContract()
        const transaction = await smartContract.grantConsent(resourceIdentifier, clientId, authServerUrl, authServerTag, from, to, scope)
        console.log(transaction)

        return { transaction }
    } catch (error) {
        console.error('Error creating contract', error)
        return { error }
    }
}