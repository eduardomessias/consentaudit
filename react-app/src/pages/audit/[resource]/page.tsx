import { FC } from 'react'


import ContractList from '@/app/ui/contract-list'
import Contract from '@/app/ui/contract'
import IContract from '@/app/lib/interfaces/contract.interface'
import { searchContractByResourceId } from '@/app/actions/search-contract'


const Page: FC<{ params: { resource: string } }> = async ({ params }) => {
    const contracts = await searchContractByResourceId(params.resource)
    return <main className="container mt-4">
        <div className="row">
            <div className="col">
                <div className="d-flex justify-content-center">
                    <h5>AUDIT CONSENT CONTRACT</h5>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <ContractList resource={params.resource}>
                    {contracts.length > 0 ? contracts.map((contract: IContract) => (
                        <Contract key={contract.hash} contract={contract}></Contract>
                    )) : (
                        <div className="d-flex justify-content-center">
                            <p>Nothing to display</p>
                        </div>
                    )}
                </ContractList>
            </div>
        </div>
    </main>
}


export default Page