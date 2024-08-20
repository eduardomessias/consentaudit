import { useState, useEffect, Suspense } from 'react'


import { createClientApplication } from '../../../actions/create-client-application'
import { retrieveClientApplications } from '../../../actions/retrieve-client-applications'
import RegisterClientApplication from '../../../components/ui/register-client-application'
import ClientApplicationList from '../../../components/ui/client-application-list'

import IClientApplication from '../../../lib/interfaces/client-application.interface'
import ClientApplicationRepository from '../../../lib/repositories/client-application.repository'


const ApplicationRegistry = () => {

    return <main className="container mt-4">
        <div className="row">
            <div className="col">

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Application registry</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/application/authorization/consent/test'>Test consent request</a>
                    </li>
                </ul>

            </div>
        </div>
        <div className="row">
            <div className="col">

                <RegisterClientApplication />

            </div>
        </div>
        <div className="row">
            <div className="col">

                <Suspense>
                    <ClientApplicationList />
                </Suspense>

            </div>
        </div>
    </main>
}


export default ApplicationRegistry