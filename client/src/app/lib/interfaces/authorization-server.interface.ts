export default interface IAuthorizationServer {
    company: string
    url: string
    alias: string
    resolveIcon(): string
}


export interface IAuthorizationServerStatic {
    new(company: string, url: string, alias: string): IAuthorizationServer
    findByUrlAndAlias(authorizationServers: IAuthorizationServer[], url: string, alias: string): IAuthorizationServer | undefined
}