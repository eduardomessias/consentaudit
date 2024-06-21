import Contract from '@/app/lib/classes/contract.class'
import Scope from '@/app/lib/classes/scope.class'
import AuthorizationServer from '@/app/lib/classes/authorizationServer.class'

const github = new AuthorizationServer('GitHub', 'https://github.com', 'github')

export const contracts = [
    new Contract('1', 'client1', [new Scope('email', 'read')], new Date(), github),
    new Contract('2', 'client2', [new Scope('email', 'read'), new Scope('profile', 'read')], new Date(), github),
]