const {errorCreator} = require("./helpers")
const Post = require("../models/Post");

exports.getPosts = (req,res) => {
    // Get the userId
    
    
    
    const {userId, tags} = req.body;
    //Find posts belonging to the User 
    Post.find({userId, tags})
    .then(posts =>{
        res.status(200).json({posts});
    })//Return the result
    .catch(err => {
        err.status = err.status || 500;
        res.status(err.status).send({message: err.message})
    })
}

exports.postAddNewPost = (req,res) => {
    const {title, imageUrl, content, userId} = req.body;
    const image = req.file.path;
    const blogPost = new Post({title, imageUrl, content,  image})
    blogPost.save()
    .then(result => {
        res.status(200)
    })
    .catch(err => {
        err.status = err.status || 500;
        res.status(err.status).send({message: err.message})
    })
}