const express=require("express");

const {  AppointmentGetData,AppointmentPostData, AppointmentPatchData, AppointmentDeleteData } = require("../controllers/appointment.controller");

const AppointmentRouter = express.Router();

// --------->>>> GET <<<<<---------
AppointmentRouter.get("/appointment",AppointmentGetData)

// --------->>>> POST <<<<<---------
AppointmentRouter.post("/appointment/add",AppointmentPostData)

// --------->>>> PATCH <<<<<---------
AppointmentRouter.patch("/appointment/update/:id",AppointmentPatchData)

// --------->>>> DELETE <<<<<---------
AppointmentRouter.delete("/appointment/delete/:id",AppointmentDeleteData)

module.exports = { AppointmentRouter }