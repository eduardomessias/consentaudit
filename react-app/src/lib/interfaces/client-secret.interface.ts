export default interface IClientSecret {
    id: string
    salt: string
    secret: string
    createdAt: Date
    updatedAt: Date
    newSecret(clientId: string): string
}