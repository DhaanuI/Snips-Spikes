const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
    DateandTime: String,
    Method : String,
    URL : String,
    IP: String,
})

const LogModel = mongoose.model('Log',LogSchema)

module.exports = { LogModel }