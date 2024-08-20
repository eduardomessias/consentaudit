import IResourceOwner from './resource-owner.interface'

export default interface IResource {
    id: string
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date

    owner: IResourceOwner
}