'use server'


import stringToBytes32 from '@/app/lib/utils/string-to-bytes32'
import utcToEpoch from '@/app/lib/utils/utc-to-epoch'


import SmartContract from '@/app/lib/classes/smart-contract.class'
import Scope from '@/app/lib/classes/scope.class'
import IScope from '@/app/lib/interfaces/scope.interface'


export async function createContract(formData: FormData) {
    console.log('Creating contract...', formData)

    // data extraction
    let resourceIdentifier: string = stringToBytes32(formData.get('resource-id')?.toString() || '')
    let clientId: string = stringToBytes32(formData.get('client-id')?.toString() || '')
    let authServerUrl: string = stringToBytes32(formData.get('auth-server-url')?.toString() || '')
    let authServerTag: string = stringToBytes32(formData.get('auth-server-tag')?.toString() || '')
    let from: number = utcToEpoch(new Date(formData.get('from')?.toString() || new Date()))
    let to: number = utcToEpoch(new Date(formData.get('to')?.toString() || new Date()))
    let scope: string = stringToBytes32(formData.get('scope')?.toString() || '')

    let storeInBlockchain: boolean = formData.get('store-in-blockchain') === 'on'

    // data transformation
    let rawScope = formData.get('scope')?.toString() || ''
    let scopes: IScope[] = rawScope?.split(',').map((item: string) => {
        let [permission, content] = item.split(':')
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

    // contract creation
    let smartContract = new SmartContract()
    console.log(await smartContract.grantConsent(resourceIdentifier, clientId, authServerUrl, authServerTag, from, to, scope))
}