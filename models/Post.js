const mongoose = require("mongoose");
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type:String,
        required: true
    },
    image: String,
    imageUrl: String,
    //userId: Schema.Types.ObjectId
})

module.exports = mongoose.model('Post', postSchema);