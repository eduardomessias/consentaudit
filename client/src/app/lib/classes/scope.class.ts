import IScope from '@/app/lib/interfaces/scope.interface'


export default class Scope implements IScope {
    content: string
    permissions: string

    constructor(content: string, permissions: string) {
        this.content = content
        this.permissions = permissions
    }

    static splitFromString(scope: string): IScope[] {
        return scope.split(',').map((scope: string) => {
            let [permissions, content] = scope.split(':')
            return new Scope(content, permissions)
        }, [])
    }
}