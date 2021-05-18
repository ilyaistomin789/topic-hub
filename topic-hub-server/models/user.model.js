const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    github: {
        type: String
    },
    twitter: {
        type: String
    },
    instagram: {
        type: String
    },
    facebook: {
        type: String
    }
},
    {
        timestamps: true,

    })

module.exports = mongoose.model('User', userSchema);
