import IResourceOwner from './resource-owner.interface'
import ITenant from './tenant.interface'

export default interface IUser {
    id: string
    createdAt?: Date
    updateAt?: Date

    tenantId: string
    tenant?: ITenant

    resourceOwnerId: string
    resourceOwner?: IResourceOwner
}