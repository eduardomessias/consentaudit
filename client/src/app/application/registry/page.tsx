import Link from 'next/link'


import { useState, useEffect, Suspense } from 'react'


import { createClientApplication } from '@/app/actions/create-client-application'
import { retrieveClientApplications } from '@/app/actions/retrieve-client-applications'
import RegisterClientApplication from '@/app/ui/register-client-application'
import ClientApplicationList from '@/app/ui/client-application-list'

import IClientApplication from '@/app/lib/interfaces/client-application.interface'
import ClientApplicationRepository from '@/app/lib/repositories/client-application.repository'


const Page = async () => {
    const clientApplications: IClientApplication[] = await ClientApplicationRepository.findMany()

    return (
        <main className="container mt-4">
            <div className="row">
                <div className="col">

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/applicaton/registry">Application registry</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href='/application/authorization/consent/test'>Test consent request</Link>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="row">
                <div className="col">

                    <RegisterClientApplication createClientApplication={createClientApplication} />

                </div>
            </div>
            <div className="row">
                <div className="col">

                    <Suspense>
                        <ClientApplicationList clientApplications={clientApplications} />
                    </Suspense>

                </div>
            </div>
        </main>
    )
}


export default Page