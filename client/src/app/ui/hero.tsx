import Link from 'next/link'
import Image from 'next/image'


const Hero = () => {
    return (
        <div className="container mt-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">Blockchain-Based Consent Audit for Personal Access Control</h1>
                    <p className="lead">Ensure transparency and trust by verifying every consent contract you have signed on our secure platform.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link href="/get-started" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Get Started</Link>
                        <Link href="/learn-more" className="btn btn-outline-secondary btn-lg px-4">Learn More</Link>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <Image className="rounded-lg-3" src="storyset_environmentalaudit_cuate.svg" alt="" width={760} height={480}></Image>
                </div>
            </div>
        </div>
    )
}


export default Hero