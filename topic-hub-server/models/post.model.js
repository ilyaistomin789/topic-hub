const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createAt: {
        default: Date.now(),
        type: Date
    },
    updatedAt: {
        type: Date
    },
    subtopics: [{ type: Schema.Types.ObjectId, ref: 'Subtopic' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})
module.exports = mongoose.model('Post', postSchema);
