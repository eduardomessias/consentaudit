import ContractList from '@/app/ui/contract-list'


const Page = async () => {
    return (
        <main className="container mt-4">
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <h5>AUDIT CONSENT CONTRACT</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ContractList />
                </div>
            </div>
        </main>
    )
}


export default Page