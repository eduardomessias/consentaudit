import Link from "next/link"

const Page = async () => {

    return (
        <main className="container mt-4">
            <div className="row">
                <div className="col">

                    <h5>Application registry</h5>

                </div>
            </div>
            <div className="row">
                <div className="col">

                    <Link href='/application/authorization/consent/test'>Test consent request</Link>

                </div>
            </div>
        </main>
    )
}


export default Page