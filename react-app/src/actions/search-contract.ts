import SmartContract from '../lib/classes/smart-contract.class'
import stringToBytes32 from '../lib/utils/string-to-bytes32'
import IContract from '../lib/interfaces/contract.interface'
import Contract from '../lib/classes/contract.class'
import { redirect } from 'react-router-dom'


export async function searchContractByResourceId(resourceId: string): Promise<IContract[]> {
    const resourceIdBytes32 = stringToBytes32(resourceId)
    const smartContract = new SmartContract()
    const consents = await smartContract.getConsents(resourceIdBytes32) || []
    const contracts = consents.map((consent: any) => Contract.newFromSmartContract(consent), [])
    return contracts
}


export async function searchContractByResIdFormData(formData: FormData) {
    redirect(`/audit/${formData.get('resource-id')?.toString() || ''}`)
}