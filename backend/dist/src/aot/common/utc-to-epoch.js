"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = utcToEpoch;
function utcToEpoch(utc) {
    return new Date(utc).getTime();
}
