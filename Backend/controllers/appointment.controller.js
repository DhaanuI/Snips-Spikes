const { Appointmentmodel } = require("../model/appointment.model");

// --------->>>> GET <<<<<---------
const AppointmentGetData = async (req,res) =>{
    try {
        const data=await Appointmentmodel.find();
        res.status(202).send(data);
    } catch (error) {
        console.log(error.message);
        res.status(404).send({Message:"Bad request 404! unable to fetch the data"});
    }
}

// --------->>>> POST <<<<<---------
const AppointmentPostData = async (req,res)=>{
    const payload=req.body;
    try {
        const appointmentData=new Appointmentmodel(payload);
        await appointmentData.save();
        res.status(202).send({Message:"Appointment created successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(404).send({Message:"Bad request 404! unable to create new appointment"});
    }
}

// --------->>>> PATCH <<<<<---------
const AppointmentPatchData = async (req,res)=>{
    const id=req.params.id;
    const payload=req.body;
    try {
        await Appointmentmodel.findByIdAndUpdate({_id:id},payload);
        res.status(202).send({Message:"Appointment updated successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(404).send({Message:"Bad request 404! unable to update the appointment"})
    }
}

// --------->>>> DELETE <<<<<---------
const AppointmentDeleteData = async(req,res)=>{
    const id=req.params.id;
    try {
        await Appointmentmodel.findByIdAndDelete({_id:id});
        res.status(202).send({Message:"Appointment deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(404).send({Message:"Bad request 404! unable to delete the appointment"})
    }
}

module.exports = {  AppointmentGetData,AppointmentPostData, AppointmentPatchData, AppointmentDeleteData }