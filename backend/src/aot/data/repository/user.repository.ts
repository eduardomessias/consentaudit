import IUser from '../../interfaces/user.interface'
import prisma from '../context/postgres/prisma'

export default class UserRepository {
    static save(user: IUser): Promise<IUser> {
        console.log('Saving user...', user)

        // save user to the database
        return prisma.user.create({
            data: {
                tenantId: user.tenantId,
                resourceOwnerId: user.resourceOwnerId,
            }
        }).then((_user: any) => {
            console.log('User saved', _user)
            user.id = _user.id
            return user
        }).catch((error: any) => {
            console.error('Error saving user', error)
            throw error
        })
    }
}