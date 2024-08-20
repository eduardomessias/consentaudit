import IClientApplication from '../../lib/interfaces/client-application.interface'
import ClientApplicationRepository from '../../lib/repositories/client-application.repository'


const ClientApplicationList = () => {
    const clientApplications: IClientApplication[] = ClientApplicationRepository.read()
    return (
        <div className='card mt-4 p-4 shadow'>
            <h3>Client Applications</h3>
            <ul className='list-group '>
                {clientApplications.map((clientApplication) => (
                    <li key={`client_application_li_${clientApplication.id}`} className='list-group-item'>{clientApplication.name}</li>
                ), [])}
            </ul>
        </div>
    )
}


export default ClientApplicationList