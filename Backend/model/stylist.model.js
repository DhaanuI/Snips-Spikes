const mongoose = require('mongoose');

const StylistSchema = mongoose.Schema({
    name : String,
    email : String,
    salary : Number,
    image : String,
    // availableSlot : {
    //     type:Boolean,
    //     enum:[true, false],
    //     default:true
    // },
    // occupiedTimeSlot : String,
})

const StylistModel = mongoose.model('Stylist', StylistSchema)

module.exports = { StylistModel }