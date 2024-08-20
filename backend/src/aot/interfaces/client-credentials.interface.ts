export default interface IClientCredentials {
    id: string
    salt: string
    secret: string
    createdAt: Date
    updatedAt: Date
    newSecret(clientId: string): string
}