const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys');


const User = mongoose.model('User')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        }) 
})


// telling passport what strategy to use
passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {

        // check to see if user is in the database 
        const existingUser = await User.findOne({ googleID: profile.id })
                if(existingUser) {
         // we already have a record with the given profile ID           
                    return done(null, existingUser)
                } else{
        // we dont have a user record with this IDBCursor, make a new record 
                    const user = await new User({ googleID: profile.id }).save()
                    done(null, user)
                }
    })
);