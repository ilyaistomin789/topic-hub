const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createAt: {
        default: Date.now(),
        type: Date
    },
    updatedAt: {
        type: Date
    },
    img: {
        data: Buffer,
        contentType: String
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema);
