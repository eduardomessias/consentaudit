import NavLink from '../../components/ui/navlink'
import { links } from '../../data/context/offline/links'
import INavLink from '../../lib/interfaces/navlink.interface'
import SearchContract from './search-contract'
import INavbarProps from '../../lib/interfaces/navbar.props.interface'


const NavBar = ({ searchContract }: INavbarProps) => {

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
                    <SearchContract searchByResource={searchContract} />
                </div>
            </div>
        </nav>
    )
}


export default NavBar