const mongoose = require('mongoose');

const MaleSchema = mongoose.Schema({
    name : String,
    image : String,
    price : Number,
    description : String,
    category : String,
    gender :String,
})

const MaleModel = mongoose.model('MaleService', MaleSchema)

module.exports = { MaleModel }