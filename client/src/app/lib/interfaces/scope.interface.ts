export default interface IScope {
    content: string
    permissions: string
}


export interface IScopeStatic {
    new(content: string, permissions: string): IScope
    splitFromString(scope: string): IScope[]
}