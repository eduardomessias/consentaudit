import Link from 'next/link'

import { links } from '@/app/data/context/offline/links'
import INavLink from '@/app/lib/interfaces/navlink.interface'


const Footer = () => {
    return (
        <footer className="container-fluid py-5 my-5 border-top mb-0">
            <div className="row">
                <div className="col">
                    <Link href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                        Consent Audit
                    </Link>
                    <p className="text-muted">&copy; 2024</p>
                </div>

                <div className="col">

                </div>

                <div className="col">
                    <h5>Take a shortcut</h5>
                    <ul className="nav flex-column">
                        {links.map((navlink: INavLink) => (
                            <li key={`footer-link-${navlink.href}`} className="nav-item mb-2">
                                <Link href={navlink.href} className="nav-link p-0 text-muted">{navlink.label}</Link>
                            </li>
                        ), [])}
                    </ul>
                </div>

                <div className="col">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


export default Footer