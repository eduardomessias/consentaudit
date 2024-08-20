import IContractListProps from '../../lib/interfaces/contract-list.props.interface'


const ContractList = ({ resource = '', children }: IContractListProps) => {
    return (
        <section className="container d-flex flex-column gap-4">
            {resource && (
                <div className="d-flex justify-content-center">
                    <p>Resource identifier: {resource}</p>
                </div>
            )}
            {children}
        </section>
    )
}


export default ContractList