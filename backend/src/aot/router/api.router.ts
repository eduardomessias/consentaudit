import { Router, Request, Response, NextFunction, } from 'express'
import { servicelog } from '../middleware/servicelog.middleware'
import { signUp } from '../api/user.api'

const apiRouter = Router()

/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request Consent Audit Backend Service
 *    responses:
 *    '200':
 *    description: A successful response
 */
apiRouter.get('/', servicelog, (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json('{ message: Consent Audit Backend Service}')
})


/**
 * @swagger
 * /sign-up:
 *  post:
 *    description: Use to sign-up a user
 *    responses:
 *    '201':
 *    description: A successful response
 */
apiRouter.post('/user', servicelog, (req: Request, res: Response, next: NextFunction) => {
    signUp(req, res, next)
        .then(() => {
            res.status(201).send({
                message: 'User signed up successfully'
            })
        })
        .catch((error: any) => {
            console.error('Error signing up', error)
            res.status(500).send({
                message: 'Error signing up'
            })
        })
})


export default apiRouter