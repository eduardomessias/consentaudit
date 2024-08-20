const GetStarted = () => {
    return <main className="container mt-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1>
                    Getting Started with Registering Client Applications
                </h1>
                <p>
                    Welcome to our authorization server documentation!
                    This guide will walk you through the process of registering client applications
                    and explain how consent storage in the blockchain enhances transparency and auditability for resource owners.
                </p>
                <h2>Prerequisites</h2>
                <p>
                    Before you start, make sure you have the following:
                </p>
                <ol>
                    <li><strong>Developer Account</strong>: Sign up for a developer account on our platform.</li>
                    <li><strong>API Access</strong>: Request access to our API by contacting our support team.</li>
                    <li><strong>Basic Knowledge</strong>: Familiarity with OAuth 2.0 and blockchain concepts.</li>
                </ol>
                {/* <h2>Step 1: Register Client Application</h2>
                    <p>
                        To register a client application, follow these steps:
                    </p>
                    <ol>
                        <li>Log in to your developer account.</li>
                        <li>Go to the <strong>Register new application</strong>.</li>
                        <li>Fill in the required details, such as name, redirect URI, and scopes.</li>
                        <li>Select between the available resource servers those you would like to activate in your login form.</li>
                        <li>Click <strong>Save</strong> to create the application.</li>
                    </ol> */}
                <a href="/application/registry" className="btn btn-primary">Navigate to the application registry</a>
            </div>
            <div className='col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg'>
                <img src="storyset_exploring_cuate.svg" alt="" width={640} height={540} className="rounded-lg-3" />
            </div>
        </div>
    </main>
}


export default GetStarted