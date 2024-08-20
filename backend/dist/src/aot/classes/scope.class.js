"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scope {
    constructor(content, permissions) {
        this.content = content;
        this.permissions = permissions;
    }
    static splitFromString(scope) {
        return scope.split(',').map((scope) => {
            let [permissions, content] = scope.split(':');
            return new Scope(content, permissions);
        }, []);
    }
}
exports.default = Scope;
