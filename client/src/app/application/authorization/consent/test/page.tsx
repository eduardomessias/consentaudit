import ConsentTest from '@/app/ui/consent-test'
import { createContract } from '@/app/actions/create-contract'


const Page = async () => {

    return (
        <main className="container mt-4">
            <div className="row">
                <div className="col">

                    <h5>Consent request test</h5>

                </div>
            </div>
            <div className="row">
                <div className="col">

                    <ConsentTest createContract={createContract} />

                </div>
            </div>
        </main>
    )
}


export default Page