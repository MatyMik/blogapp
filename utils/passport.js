const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");



const localStrategy = new LocalStrategy( {
    usernameField:'email'
},(email, password, done) =>{
    User.findOne({email})
    .then(user =>{
        if(!user) {
            return done(null, false, {message: "Incorrect email"});
        }
        bcrypt.compare(user.password, password).then(isEqual =>{
            if (!isEqual){
                return done(null, false, {message: "Invalid password"});
            }
            return done(null, user);
        })      
    })
})

passport.use(localStrategy);