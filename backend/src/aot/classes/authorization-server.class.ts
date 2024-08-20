import IAuthorizationServer from '../interfaces/authorization-server.interface'


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

    static findByUrlAndAlias(authorizationServers: IAuthorizationServer[], url: string, alias: string): IAuthorizationServer | undefined {
        return authorizationServers.find((s: IAuthorizationServer) => s.url === url && s.alias === alias)
    }
}