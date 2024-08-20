import { createClientApplication } from '../../actions/create-client-application'


const RegisterClientApplication = () => {
    return (
        <div className='card mt-4 p-4 shadow'>
            <form onSubmit={() => createClientApplication}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Application Name</label>
                    <input type="text" className="form-control" id="name" name='name' aria-describedby="nameHelp" placeholder="My awesome app" required></input>
                    <div id="nameHelp" className="form-text">The name of the client application.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="callback-url" className="form-label">Callback URL</label>
                    <input type="text" className="form-control" id="callback" name='callback' placeholder='http://localhost:3000/auth/callback' required></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}


export default RegisterClientApplication