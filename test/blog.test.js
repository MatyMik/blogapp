/*const {expect} = require('chai');
const {getPosts} = require("../controllers/blogController");
const mongoose = require('mongoose');
const testEmail = 'test@test.com';
const testEmail2 = 'test2@test.com';
const User = require('../models/user');
const password = 'password';
const testUser = new User({email:testEmail, password});
const chai = require('chai');
let userId = null;
chai.use(require('chai-as-promised'))


describe('Blog list and pagination', function() {
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
*/