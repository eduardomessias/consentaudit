'use server'


import SmartContract from '@/app/lib/classes/smart-contract.class'
import stringToBytes32 from '@/app/lib/utils/string-to-bytes32'
import IContract from '@/app/lib/interfaces/contract.interface'
import Contract from '@/app/lib/classes/contract.class'
import { redirect } from 'next/navigation'


export async function searchContractByResourceId(resourceId: string): Promise<IContract[]> {
    let resourceIdBytes32 = stringToBytes32(resourceId)
    console.log('Searching contract by resource ID:', resourceId, `(${resourceIdBytes32})`)

    const smartContract = new SmartContract()
    const consents = await smartContract.getConsents(resourceIdBytes32) || []
    const contracts = consents.map((consent: any) => {
        let contract = Contract.newFromSmartContract(consent)
        //console.log('Consent -> Contract:', consent, contract)
        return contract;
    }, [])
    return contracts
}


export async function searchContractByResIdFormData(formData: FormData) {
    redirect(`/audit/${formData.get('resource-id')?.toString() || ''}`)
}