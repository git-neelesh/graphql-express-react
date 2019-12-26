const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const eventSchema = new Schema({    
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    },
    id: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Event', eventSchema);

