const fs = require('fs');
const path = require('path');

// --------------->>>>>>>> Stylist Model Location <<<<<<<<-------------------
const { StylistModel } = require("../model/stylist.model");


// --------->>>> Logs of Router <<<<<---------
function Logs(req) {
    const logFilePath = path.join(__dirname, '../logs/routes.log');
    const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
    logStream.write(`[${new Date().toISOString()}] ${req.method}${req.url} ${req.ip}\n`);
}

// --------->>>> GET <<<<<---------
const StylistGetData = async (req, res) => {
    try {
        const data = await StylistModel.find()
        res.status(202).send(data);
        Logs(req);
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

// --------->>>> POST <<<<<---------
const StylistPostData = async (req, res) => {
    const payload = req.body;
    try {
        const data = new StylistModel(payload);
        await data.save();
        res.status(202).send({
            Message: "Data saved successfully",
        });
        Logs(req);
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

// --------->>>> PATCH <<<<<---------
const StylistPatchData = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await StylistModel.findByIdAndUpdate({ _id: ID }, payload)
        res.status(202).send({
            Message: "Data successfully modified",
        });
        Logs(req);
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

// --------->>>> DELETE <<<<<---------
const StylistDeleteData = async (req, res) => {
    const ID = req.params.id;
    try {
        await StylistModel.findByIdAndDelete({ _id: ID })
        res.status(202).send({
            Message: "Data successfully deleted",
        });
        Logs(req);
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

module.exports = {  StylistGetData, StylistPostData, StylistPatchData, StylistDeleteData }