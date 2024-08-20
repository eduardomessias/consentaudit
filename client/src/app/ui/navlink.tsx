'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'


import INavLink from '@/app/lib/interfaces/navlink.interface'


const NavLink = ({ href, label }: INavLink) => {
    const pathname = usePathname()
    return (
        <li className="nav-item">
            <Link href={pathname === href ? href : '#'} className={clsx('nav-link', { active: pathname === href })}>{label}</Link>
        </li>
    )
}


export default NavLink