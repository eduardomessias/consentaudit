import { useLocation } from 'react-router-dom'
import clsx from 'clsx'


import INavLink from '../../lib/interfaces/navlink.interface'


const NavLink = ({ href, label }: INavLink) => {
    const location = useLocation()
    const pathname = location.pathname
    return (
        <li className="nav-item">
            <a href={href} className={clsx('nav-link', { active: pathname === href })}>{label}</a>
        </li>
    )
}


export default NavLink