const User = require("../models/user");
const {errorCreator} = require('./helpers');
const bcrypt = require("bcryptjs");

exports.postSignUp = (req, res) => {
    const email = req.body.email.toLowerCase();
    const password = req.body.password.toString();
    const confirmPassword = req.body.confirmPassword.toString();

    if(!email){
        throw errorCreator("No email address was given", 401)
    }
    
    return User.find({email})
    .then(user =>{ 
        
        if(user.length>0) {
            throw errorCreator('Email address already taken!', 401);
        }
        if(password!==confirmPassword){
            throw errorCreator("Passwords don't match!", 401);
        }
        return bcrypt.hash(password, 12);
    })
    .then(hashedPassword =>{
        const user = new User({email, password:hashedPassword});
        return user.save();
    })
    .then(userDoc =>{
        res.status(200).json({message:"Successful subscription"});
    }) 
    
    .catch(err => {
        err.status= err.status || 500;
        
        console.log(err.message);
        res.status(err.status).send({message: err.message})
        return err;
    })
}

exports.postLogin = (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    return User.findOne({email})
    .then(user =>{
        if(!user){
            throw errorCreator('Email address not registered!',401)
        }
        return bcrypt.compare(password, user.password)
    })
    .then(pswdsEqual =>{
        if(!pswdsEqual){
            throw errorCreator('Incorrect password!',401)
        }
        jwt.sign({email:email, userId: userId}, 'JWT_TOKEN_KEY', {expiresIn:'1h'})
        res.status(200).json({message:"yes"})
    })
    .catch(err => 
        res.status(err.staus).json({error:err}))
}