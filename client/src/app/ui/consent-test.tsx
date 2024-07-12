'use client'


import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'


import IConsentTestProps from '@/app/lib/interfaces/consent-test.props.interface'


const initialState: any = {
    resourceIdentifier: 'sample-resource-identifier',
    clientId: 'sample-client-id',
    authServerUrl: 'https://github.com',
    authServerTag: 'github',
    from: new Date(Date.now()),
    to: new Date(Date.now()).setFullYear(new Date(Date.now()).getFullYear() + 1),
    scope: 'read:email',
    storeInBlockchain: true
}


function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button type="submit" className="btn btn-primary" disabled={pending}>Submit</button>
    )
}


const ConsentTest = ({ createContract }: IConsentTestProps) => {
    const [state, action] = useFormState(createContract, initialState)
    return (
        <div className='card mt-4 p-4 shadow'>
            <form action={action}>
                <div className="mb-3">
                    <label htmlFor="resource-id" className="form-label">Resource identifier</label>
                    <input type="text" className="form-control" id="resource-id" name='resource-id' aria-describedby="resourceIdHelp" required></input>
                    <div id="resourceIdHelp" className="form-text">The resource identifier is a unique code sent to the resource owner when the authorization server grant access and store the consent in the blockchain.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="client-id" className="form-label">Client identifier</label>
                    <input type="text" className="form-control" id="client-id" name='client-id' required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="auth-server-url" className="form-label">Authorization server URL</label>
                    <input type="text" className="form-control" id="auth-server-url" name='auth-server-url' required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="auth-server-tag" className="form-label">Authorization server tag</label>
                    <input type="text" className="form-control" id="auth-server-tag" name='auth-server-tag' required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="from" className="form-label">Authorization start date</label>
                    <input type="datetime-local" className="form-control" id="from" name='from' required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="to" className="form-label">Authorization end date</label>
                    <input type="datetime-local" className="form-control" id="to" name='to' required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="scope" className="form-label">Authorization scope</label>
                    <input type="text" className="form-control" id="scope" name='scope' required></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="store-in-blockchain" name='store-in-blockchain'></input>
                    <label className="form-check-label" htmlFor="store-in-blockchain">Save consent in the blockchain?</label>
                </div>
                <SubmitButton />
            </form >
        </div>
    )
}


export default ConsentTest