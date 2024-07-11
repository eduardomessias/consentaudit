'use client'


import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'


import IRegisterClientApplicationProps from '@/app/lib/interfaces/register-client-application.props.interface'


const initialState: any = {
    name: '',
    callback: ''
}


function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button type="submit" className="btn btn-primary" disabled={pending}>Submit</button>
    )
}


const RegisterClientApplication = ({ createClientApplication }: IRegisterClientApplicationProps) => {
    const [state, action] = useFormState(createClientApplication, initialState)
    return (
        <form action={createClientApplication}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' aria-describedby="nameHelp" required></input>
                <div id="nameHelp" className="form-text">The name of the client application.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="callback-url" className="form-label">Callback URL</label>
                <input type="text" className="form-control" id="callback" name='callback' placeholder='http://localhost:3000/auth/callback' required></input>
            </div>
            <SubmitButton />
        </form>
    )
}


export default RegisterClientApplication