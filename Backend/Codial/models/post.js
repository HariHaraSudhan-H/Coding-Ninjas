const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // Including the array of ids of comments in this post Schema to fetch it fast
    comments : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
}, {
    timestamps: true
})

const Post = mongoose.model('Post',postSchema);
module.exports = Post;