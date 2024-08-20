// Mock data for contracts
import IContract from '../../../interfaces/contract.interface'
import Contract from '../../../classes/contract.class'
import Scope from '../../../classes/scope.class'
import AuthorizationServer from '../../../classes/authorization-server.class'
import Effectiveness from '../../../classes/effectiveness.class'


const github = new AuthorizationServer('GitHub', 'https://github.com', 'github')


export const contracts: IContract[] = [
    new Contract('1', 'resource1', 'client1', [new Scope('email', 'read')], new Effectiveness(new Date('2024-06-01T00:00:00.000Z'), new Date('2025-06-01T00:00:00.000Z')), github),
    new Contract('2', 'resource1', 'client2', [new Scope('email', 'read'), new Scope('profile', 'read')], new Effectiveness(new Date('2024-06-01T00:00:00.000Z'), new Date('2025-06-01T00:00:00.000Z')), github),
]