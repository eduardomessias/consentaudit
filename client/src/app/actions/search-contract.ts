'use server'


import SmartContract from '@/app/lib/classes/smart-contract.class'
import stringToBytes32 from '@/app/lib/utils/string-to-bytes32'


export async function searchContractByResourceId(formData: FormData) {
    let resourceId: string = formData.get('resource-id')?.toString() || ''
    let resourceIdBytes32 = stringToBytes32(resourceId)
    console.log('Searching contract by resource ID:', resourceId, `(${resourceIdBytes32})`)

    const smartContract = new SmartContract()
    console.log(await smartContract.getConsents(resourceIdBytes32))
}