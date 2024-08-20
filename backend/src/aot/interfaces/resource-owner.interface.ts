import IResource from './resource.interface'
import IUser from './user.interface'

export default interface IResourceOwner {
    id: string
    createdAt: Date
    updateAt: Date

    user: IUser
    resources: IResource[]
}