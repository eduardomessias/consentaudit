import passport from '@/auth/passport-github'
import nextConnect from 'next-connect'


export default nextConnect().use(passport.initialize()).get(passport.authenticate('github', { scope: ['profile', 'email '] }))