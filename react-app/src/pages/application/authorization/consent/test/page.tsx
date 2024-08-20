import { FC } from 'react'


import Link from 'next/link'


import ConsentTest from '@/app/ui/consent-test'
import { createContract } from '@/app/actions/create-contract'


const Page: FC = async () => {

    return <main className="container mt-4">
        <div className="row">
            <div className="col">

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" href="/application/registry">Application registry</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" href='#'>Test consent request</Link>
                    </li>
                </ul>

            </div>
        </div>
        <div className="row">
            <div className="col">

                <ConsentTest createContract={createContract} />

            </div>
        </div>
    </main>
}


export default Page