"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthorizationServer {
    constructor(company, url, alias) {
        this.company = company;
        this.url = url;
        this.alias = alias;
    }
    resolveIcon() {
        return `bi bi-${this.alias}`;
    }
    static findByUrlAndAlias(authorizationServers, url, alias) {
        return authorizationServers.find((s) => s.url === url && s.alias === alias);
    }
}
exports.default = AuthorizationServer;
