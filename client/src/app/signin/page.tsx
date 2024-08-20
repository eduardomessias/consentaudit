import { FC } from 'react'


import Link from 'next/link'


const Page: FC = () => {
    return <main className='container mt-5'>
        <Link href='/api/login' className='btn btn-primary'>
            <i className='bi-github me-2'></i>
            Login with GitHub
        </Link>
    </main>
}


export default Page