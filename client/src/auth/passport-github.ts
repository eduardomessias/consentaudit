import passport from 'passport'
import { Profile, Strategy as GithubStrategy } from 'passport-github2'


const handleProfile = (user: Profile) => {
    return new Promise((resolve, reject) => {
        resolve('Authorized')
    })
}


passport.use(new GithubStrategy({
    clientID: 'GITHUB_CLIENT_ID',
    clientSecret: 'GITHUB_CLIENT_SECRET',
    callbackURL: 'http://localhost:3000/auth/github/callback',
}, (accessToken, refreshToken, profile, done) => {
    handleProfile(profile)
        .then((user) => {
            done(null, user)
        })
        .catch((error) => {
            done(error)
        })
}))


passport.serializeUser((
    user: any,
    done: (arg0: null, arg1: any) => any
) => {
    process.nextTick(() => {
        return done(null, user)
    })
})


passport.deserializeUser((
    user: any,
    done: (arg0: null, arg1: any) => any
) => {
    process.nextTick(() => {
        return done(null, user)
    })
})


export default passport