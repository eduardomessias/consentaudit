export default interface IAuthorizationServer {
    company: string
    url: string
    alias: string
    resolveIcon(): string
}