import ITenant from '../../interfaces/tenant.interface'
import prisma from '../context/postgres/prisma'


export default class TenantRepository {
    static save(tenant: ITenant): Promise<ITenant> {
        console.log('Saving tenant...', tenant)

        // save tenant to the database
        return prisma.tenant.create({
            data: {
                name: tenant.name,
            }
        }).then((_tenant: any) => {
            console.log('Tenant saved', _tenant)
            tenant.id = _tenant.id
            return tenant
        }).catch((error: any) => {
            console.error('Error saving tenant', error)
            throw error
        })
    }
}