import { Request, Response, NextFunction } from 'express'
import UserRepository from '../data/repository/user.repository'

/** openapi
 * /sign-up:
 *  post:
 *      description: Use to sign-up a user
 *      responses:
 *          '201':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 */
export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    console.log('Signing up user...', req.body)

    // save user to the database
    const user = await UserRepository.save(req.body)

    console.log('User signed up', user)

    next()
}