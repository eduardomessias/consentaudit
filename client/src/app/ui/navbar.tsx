'use client'


import NavLink from '@/app/ui/navlink'
import { links } from '@/app/data/links'
import INavLink from '@/app/lib/interfaces/navlink.interface'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Consent Audit</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((navlink: INavLink) => (
                            <NavLink key={`nav-link-${navlink.href}`} href={navlink.href} label={navlink.label} />
                        ))}
                    </ul>
                    <form className="d-flex w-50">
                        <input className="form-control me-2" type="search" placeholder="Resource identification" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}


export default NavBar