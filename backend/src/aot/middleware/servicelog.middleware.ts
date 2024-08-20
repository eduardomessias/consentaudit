import { Request, Response, NextFunction } from "express"


const servicelog = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[CONSENT-AUDIT][BACK-END][${new Date(Date.now()).toISOString()}]`, req.method, req.originalUrl)

    next()
}


export { servicelog }