const fs = require('fs');
const path = require('path');

// --------------->>>>>>>> Male Service Model Location <<<<<<<<-------------------
const { MaleModel } = require("../model/MaleServiceModel");


// --------->>>> Logs of Router <<<<<---------
function Logs(req) {
    const logFilePath = path.join(__dirname, '../logs/routes.log');
    const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
    logStream.write(`DateAndTime: [${new Date().toISOString()}] Method: ${req.method} URL: ${req.url} IP: ${req.ip}\n`);
}


// --------->>>> GET <<<<<---------
const MaleGetData = async (req, res) => {
    try {
        const data = await MaleModel.find()
        res.status(202).send(data);
        Logs(req);
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

// --------->>>> POST <<<<<---------
const MalePostData = async (req, res) => {
    const payload = req.body;
    try {
        const data = new MaleModel(payload);
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
const MalePatchData = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await MaleModel.findByIdAndUpdate({ _id: ID }, payload)
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
const MaleDeleteData = async (req, res) => {
    const ID = req.params.id;
    try {
        await MaleModel.findByIdAndDelete({ _id: ID })
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

module.exports = {  MaleGetData, MalePostData, MalePatchData, MaleDeleteData }