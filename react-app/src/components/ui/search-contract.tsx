import { useSearchParams } from 'react-router-dom'


import ISearchContractProps from '../../lib/interfaces/search-contract.props.interface'


const SearchContract = ({ searchByResource }: ISearchContractProps) => {
    const [searchParams] = useSearchParams()
    const resourceId = searchParams.get('resource-id') || ''
    return (
        <form className="d-flex w-50" onSubmit={searchByResource}>
            <input className="form-control me-2" type="text" name='resource-id' placeholder="Resource identification" aria-label="Search" defaultValue={resourceId}></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}


export default SearchContract