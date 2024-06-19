import INavLink from '@/app/lib/interfaces/navlink.interface'

export default class NavLink implements INavLink {
    constructor(public href: string, public label: string) { }
}