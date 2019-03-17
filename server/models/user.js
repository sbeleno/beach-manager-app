const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    password: { type: String, required: true },
    role: {type: String, required: true },
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date
});

module.exports = mongoose.model('User', UserSchema);
