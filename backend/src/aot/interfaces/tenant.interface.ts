import IUser from './user.interface'

export default interface ITenant {
    id: string
    createdAt: Date
    updateAt: Date

    name?: string
    users?: IUser[]
}