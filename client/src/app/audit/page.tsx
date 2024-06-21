import ContractList from '@/app/ui/contract-list'
import Contract from '@/app/ui/contract'

import { contracts } from '@/app/data/mock/contracts'

import IContract from '@/app/lib/interfaces/contract.interface'

import { getContract } from '@/app/data/context/ethereum/ethereum'
import ConsentAudit from '@/app/data/context/ethereum/contracts/ConsentAudit.json'

const Page = () => {

    const smartContract = getContract('0x5FbDB2315678afecb367f032d93F642f64180aa3', ConsentAudit.abi)
    const consents = smartContract.getConsents('0x7265733100000000000000000000000000000000000000000000000000000000')

    return (
        <main className="container mt-4">
            <div className="row">
                <div className="col">

                    <h5>Audit consent contract</h5>
                    <p>{consents}</p>

                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ContractList>
                        {contracts.map((contract: IContract) => (
                            <Contract key={contract.hash} contract={contract}></Contract>
                        ))}
                    </ContractList>
                </div>
            </div>
        </main>
    )
}


export default Page