const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    student: {
        type: String,
        required: true
    },
    restaurant: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    taste: {
        type: Number,
        required: true
    },
    service: {
        type: Number,
        required: true
    },
    worth: {
        type: Number,
        required: true
    },
    recommend: {
        type: String,
        required: true
    },
    review: {
        type: String,
    },
},{ timestamps : true });


const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;