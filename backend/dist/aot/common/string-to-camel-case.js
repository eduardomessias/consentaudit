"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = camelCase;
function camelCase(str) {
    let camel = str;
    camel = camel.toLowerCase().charAt(0).toUpperCase() + camel.slice(1);
    return camel;
}
