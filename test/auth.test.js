const {expect} = require('chai');
const {postSignUp, postLogin} = require("../controllers/authController");
const mongoose = require('mongoose');
const testEmail = 'test@test.com';
const testEmail2 = 'test2@test.com';
const User = require('../models/user');
const password = 'password';
const testUser = new User({email:testEmail, password});
const chai = require('chai');
let userId = null;
chai.use(require('chai-as-promised'))


describe('Signup without testuser', function() {
    before(function(done) {
        mongoose.connect('mongodb+srv://Mikey:6tZSMg3EsQZ9sGge@cluster0-elh0m.mongodb.net/blogapptest?retryWrites=true')
        .then(result =>{
            done()
        })
    })

    it('should require an email', function() {
        const req = {
            body:{}
        }
        expect(postSignUp.bind(this, req,{})).to.throw("No email address was given")
    })

    it('should throw an error if th two passwords don\'t match', function(done) {
        const req = {
            body:{
                email:testEmail,
                password,
                confirmPassowrd:password + "a"
            }
        }
        postSignUp(req,{}).then(result =>{
            expect(result).to.have.property('message',"Passwords don't match!")
            expect(result).to.be.an('error');
            done();
        })
        .catch(done)
    })

    after(function(done){
        User.deleteMany({})
        .then(result => {
            return mongoose.disconnect();
        })
        .then(result => {
            done();
        })
    })
})

describe('Signup with testuser', function() {
    before(function(done) {
        mongoose.connect('mongodb+srv://Mikey:6tZSMg3EsQZ9sGge@cluster0-elh0m.mongodb.net/blogapptest?retryWrites=true')
        .then(result =>{
            return testUser.save();
        })
        .then(user => done())
        .catch(err => console.log(err))
    })

    it('should throw an error if email already registered', function(done) {
        const req = {
            body:{
                email:testEmail,
                password
            }
        }

        postSignUp(req,{})
        .then(result =>{
            expect(result).to.have.property('message', 'Email address already taken!')
            expect(result).to.be.an('error');
            done();
        })
        .catch(done);
        //expect().to.be.rejectedWith(Error('Email address already taken!'))
        //done();
    })

    after(function(done){
        User.deleteMany({})
        .then(result => {
            return mongoose.disconnect();
        })
        .then(result => {
            done();
        })
    })
})

/*
describe('Login', function(){
    before(function(done) {
        mongoose.connect('mongodb+srv://Mikey:6tZSMg3EsQZ9sGge@cluster0-elh0m.mongodb.net/blogapptest?retryWrites=true')
        .then(result =>{
            return testUser.save();
        })
        .then(user => {
            done()
        })   
        .catch(err => console.log(err))
    })

    it('should throw an error if email not already registered', function(done) {
        const req = {
            body:{
                email:testEmail2,
                password
            }
        }

        postLogin(req,{})
        .then(result =>{
            expect(result).to.have.property('message', 'Email address not registered!')
            expect(result).to.be.an('error');
            done();
        })
        .catch(done);
        //expect().to.be.rejectedWith(Error('Email address already taken!'))
        //done();
    })
    it('should throw an error if password is incorrect', function(done) {
        const req = {
            body:{
                email:testEmail,
                password:password + "a"
            }
        }

        postLogin(req,{})
        .then(result =>{
            expect(result).to.have.property('message', 'Incorrect password!')
            expect(result).to.be.an('error');
            done();
        })
        .catch(done);
        //expect().to.be.rejectedWith(Error('Email address already taken!'))
        //done();
    })
    it('should return a valid userId', function(done) {
        const req = {
            body:{
                email:testEmail,
                password:password
            }
        }

        postLogin(req,{})
        .then(result =>{
            expect(result).to.have.property('data', {userId})
            done();
        })
        .catch(done);
        //expect().to.be.rejectedWith(Error('Email address already taken!'))
        //done();
    })


    after(function(done){
        User.deleteMany({})
        .then(result => {
            return mongoose.disconnect();
        })
        .then(result => {
            done();
        })
    })
})

*/