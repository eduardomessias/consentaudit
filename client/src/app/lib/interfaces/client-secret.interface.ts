export default interface IClientSecret {
    id: string
    secret: string
    createdAt: Date
    updatedAt: Date
    newSecret(clientId: string): string
}