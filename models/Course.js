const mongoose = require('mongoose');

const Course = mongoose.model('Course', new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}));

module.exports = Course;