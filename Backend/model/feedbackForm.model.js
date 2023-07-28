const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    name : String,
    email: String,
    phone: Number,
    message:String,
})

const FeedbackModel = mongoose.model('FeedbackService', FeedbackSchema)

module.exports = { FeedbackModel }