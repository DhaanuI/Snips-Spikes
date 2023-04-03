const mongoose = require('mongoose');

const FemaleSchema = mongoose.Schema({
    name : String,
    image : String,
    price : Number,
    description : String,
    category : String,
    gender : String,
})

const FemaleModel = mongoose.model('FemaleService', FemaleSchema)

module.exports = { FemaleModel }