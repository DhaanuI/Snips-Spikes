const { Appointmentmodel } = require("../model/appointment.model");

const { sendEmail } = require("../nodemailer/sendingEmails");

// --------->>>> GET <<<<<---------
const AppointmentGetData = async (req,res) =>{
    try {
        const data=await Appointmentmodel.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error.message);
        res.status(404).send({Message:"Bad request 404! unable to fetch the data"});
    }
}

// --------->>>> POST <<<<<---------
const AppointmentPostData = async (req,res)=>{
    const payload=req.body;
    try {
        sendEmail({email:payload.user_email,subject:`Haircut with ${payload.styler_name} on ${payload.date} at ${payload.time}`,body:`Dear ${payload.user_name},<br>

        Thank you for booking an appointment with our salon. This email is to confirm that your appointment with our experienced hairdresser, ${payload.styler_name}, has been successfully scheduled for a haircut on ${payload.date} at ${payload.time}.<br>
        
        Please make sure to arrive on time for your appointment to ensure that we can provide you with the best possible service.<br>We kindly request that you notify us at least 24 hours in advance if you need to cancel or reschedule your appointment.<br>
        
        If you have any questions or concerns, please do not hesitate to contact us at snipsandspikes@gmail.com.<br>
        
        We look forward to seeing you soon!<br>
        
        Best regards,<br>
        Snips and Spikes`});
        const appointmentData=new Appointmentmodel(payload);
        await appointmentData.save();
        res.status(200).send({Message:"Appointment created successfully"});
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
        res.status(200).send({Message:"Appointment updated successfully"});
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
        res.status(200).send({Message:"Appointment deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(404).send({Message:"Bad request 404! unable to delete the appointment"})
    }
}

module.exports = {  AppointmentGetData,AppointmentPostData, AppointmentPatchData, AppointmentDeleteData }