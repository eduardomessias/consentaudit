import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import passport from '@/auth/passport-github'


export default nextConnect().get(passport.authenticate('github'), (req: NextApiRequest & { user: any }, res: NextApiResponse) => { res.redirect('/') })