const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
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
    }
})

module.exports = mongoose.model('Topic', topicSchema);

