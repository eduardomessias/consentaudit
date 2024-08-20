import INavLink from '../interfaces/navlink.interface'

export default class NavLink implements INavLink {
    constructor(public href: string, public label: string) { }
}