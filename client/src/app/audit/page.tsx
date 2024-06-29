import ContractList from '@/app/ui/contract-list'
import Contract from '@/app/ui/contract'

import { contracts } from '@/app/data/context/offline/contracts'

import IContract from '@/app/lib/interfaces/contract.interface'

const Page = async () => {

    return (
        <main className="container mt-4">
            <div className="row">
                <div className="col">

                    <h5>Audit consent contract</h5>

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