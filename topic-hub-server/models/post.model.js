const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    topic: {
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    }
},
    {
        timestamps: true
    })
module.exports = mongoose.model('Post', postSchema);
