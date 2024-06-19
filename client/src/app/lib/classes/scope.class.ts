import IScope from '@/app/lib/interfaces/scope.interface'


export default class Scope implements IScope {
    content: string
    permissions: string

    constructor(content: string, permissions: string) {
        this.content = content
        this.permissions = permissions
    }
}