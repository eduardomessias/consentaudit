import IAuthorizationServer from '@/app/lib/interfaces/authorization-server.interface'


export default class AuthorizationServer implements IAuthorizationServer {
    company: string
    url: string
    alias: string

    constructor(company: string, url: string, alias: string) {
        this.company = company
        this.url = url
        this.alias = alias
    }

    resolveIcon(): string {
        return `bi bi-${this.alias}`
    }
}