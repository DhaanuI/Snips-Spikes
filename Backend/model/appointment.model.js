const mongoose =require("mongoose");

const appointmentSchema=mongoose.Schema({
    stylerid:String,
    userid:String,
    serviceid:String,
    date:String,
    time:String,
    service_name:String,
    service_des:String
})

const Appointmentmodel=mongoose.model('appointment',appointmentSchema);

module.exports={
    Appointmentmodel
}