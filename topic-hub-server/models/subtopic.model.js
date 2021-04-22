const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subtopicSchema = new Schema({
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
    topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }]
})
module.exports = mongoose.model('Subtopic', subtopicSchema);
