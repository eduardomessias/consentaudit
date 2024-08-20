import IContractProps from '../../lib/interfaces/contract.props.interface'


import camelCase from '../../lib/utils/string-to-camel-case'


const Contract = ({ contract }: IContractProps) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="d-flex flex-column">
                    <div className="d-flex gap-1 justify-content-between">
                        <div className="d-flex gap-1">
                            <i className={`${contract.authorizedBy.resolveIcon()}`}></i>
                            <span><h5>{contract.authorizedBy.company} ({contract.client})</h5></span>
                        </div>
                        <div className="d-flex gap-1">
                            <span>
                                <a href={contract.authorizedBy.url}>
                                    {contract.authorizedBy.url}
                                    &nbsp;
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex gap-1">
                        {Date.now() > new Date(contract.effectiveness.to).getTime() ? (
                            <div className="text-danger">
                                <span><i className="bi bi-calendar-x"></i></span>
                                &nbsp;
                                Expired on
                                &nbsp;
                                <span>{contract.effectiveness.to.toLocaleString()}</span>
                            </div>

                        ) : (
                            <div>
                                <span><i className="bi bi-calendar"></i></span>
                                &nbsp;
                                Expires on
                                &nbsp;
                                <span>{contract.effectiveness.to.toLocaleString()}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Consent scope</h5>
                <p className="card-text">The following permissions have been granted:</p>
                <ul>
                    {contract.scope.map((scope) => (
                        <li key={scope.content}>
                            <span>{camelCase(scope.permissions)} {scope.content}</span>
                        </li>
                    ))}
                </ul>
                <p className="card-text">
                    <small className="text-muted">
                        This contract is a formal immutable representation of the authorization
                        consent given by the resource to the client ({contract.client})
                        as per requested to the authorization server provider {contract.authorizedBy.company}.
                    </small>
                </p>
            </div>
            <div className="card-footer text-muted">
                Contract hash: {contract.hash}
                &nbsp;
                (
                <a href={`/contract/${contract.hash}`}>
                    view contract details in the blockchain
                    &nbsp;
                    <i className="bi bi-box-arrow-up-right"></i>
                </a>
                )
            </div>
        </div>
    );
}


export default Contract