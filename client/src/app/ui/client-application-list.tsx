'use client'


import IRetrieveClientApplicationsProps from '@/app/lib/interfaces/retrieve-client-applications.props.interface'


const ClientApplicationList = ({ clientApplications }: IRetrieveClientApplicationsProps) => {
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