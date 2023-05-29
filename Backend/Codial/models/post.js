const mongoose = require('mongoose');

const postSchema = new mongoose({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamp: true
})

const post = mongoose.model('Post',postSchema);
modules.export = Post;