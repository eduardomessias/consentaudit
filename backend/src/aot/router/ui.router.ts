// Routes
import { Router, Request, Response, NextFunction, } from 'express'
import { servicelog } from '../middleware/servicelog.middleware'


const router = Router()


router.get('/', servicelog, (req: Request, res: Response) => {
    res.send('Consent Audit Backend Service')
})


export default router