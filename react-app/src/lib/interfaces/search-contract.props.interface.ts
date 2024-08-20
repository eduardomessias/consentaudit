import { FormEvent } from 'react'

export default interface ISearchContractProps {
    searchByResource: (event: FormEvent<HTMLFormElement>) => void
}