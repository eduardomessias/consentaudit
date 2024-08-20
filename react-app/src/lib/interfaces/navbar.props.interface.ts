import { FormEvent } from 'react'


export default interface INavbarProps {
    searchContract: (event: FormEvent<HTMLFormElement>) => void
}