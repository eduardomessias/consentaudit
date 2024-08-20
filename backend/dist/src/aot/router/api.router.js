"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servicelog_middleware_1 = require("../middleware/servicelog.middleware");
const user_api_1 = require("../api/user.api");
const apiRouter = (0, express_1.Router)();
/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request Consent Audit Backend Service
 *    responses:
 *    '200':
 *    description: A successful response
 */
apiRouter.get('/', servicelog_middleware_1.servicelog, (req, res, next) => {
    res.status(200).json('{ message: Consent Audit Backend Service}');
});
/**
 * @swagger
 * /sign-up:
 *  post:
 *    description: Use to sign-up a user
 *    responses:
 *    '201':
 *    description: A successful response
 */
apiRouter.post('/user', servicelog_middleware_1.servicelog, (req, res, next) => {
    (0, user_api_1.signUp)(req, res, next)
        .then(() => {
        res.status(201).send({
            message: 'User signed up successfully'
        });
    })
        .catch((error) => {
        console.error('Error signing up', error);
        res.status(500).send({
            message: 'Error signing up'
        });
    });
});
exports.default = apiRouter;
