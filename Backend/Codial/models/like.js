const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // defines the object Id od parent Object
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    // this field helps in dynamically selecting the parent element
    onModel: {
        type: String,
        required: true,
        enum: ['Post', 'Comment']
    }

}, {
    timestamps: true
});

const Like = mongoose.model('Like',likeSchema);

module.exports = Like;