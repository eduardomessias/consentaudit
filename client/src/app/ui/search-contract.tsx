'use client'


import ISearchContractProps from '@/app/lib/interfaces/search-contract.props.interface'


const SearchContract = ({ searchByResource }: ISearchContractProps) => {
    return (
        <form className="d-flex w-50" action={searchByResource}>
            <input className="form-control me-2" type="text" name='resource-id' placeholder="Resource identification" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}


export default SearchContract