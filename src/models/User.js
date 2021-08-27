const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    createAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.virtual('posts', {
    ref: 'Post', //The Model to use
    localField: '_id', //Find in Model, where localField
    foreignField: 'user', // is equal to foreignField
 });

 // Set Object and Json property to true. Default is set to false
 UserSchema.set('toObject', { virtuals: true });
 UserSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', UserSchema);
