const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    createAt: {
        type: Date,
        default: Date.now
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

module.exports = mongoose.model('User', PostSchema);
