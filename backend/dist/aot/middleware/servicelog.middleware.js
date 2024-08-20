"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicelog = void 0;
const servicelog = (req, res, next) => {
    console.log(`[CONSENT-AUDIT][BACK-END][${new Date(Date.now()).toISOString()}]`, req.method, req.originalUrl);
    next();
};
exports.servicelog = servicelog;
