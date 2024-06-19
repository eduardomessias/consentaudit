import Contract from '@/app/lib/classes/contract.class'
import Scope from '@/app/lib/classes/scope.class'
import AuthorizationServer from '@/app/lib/classes/authorizationServer.class'


export const contracts = [
    new Contract('1', 'client1', [new Scope('email', 'read')], new Date(), new AuthorizationServer('GitHub', 'https://github.com', 'github')),
]