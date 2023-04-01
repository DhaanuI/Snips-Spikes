const fs = require('fs');
const path = require('path');

// --------------->>>>>>>> Female Service Model Location <<<<<<<<-------------------
const { FemaleModel } = require("../model/FemaleServicemodel");


// --------->>>> Logs of Router <<<<<---------
function Logs(req) {
    const logFilePath = path.join(__dirname, '../logs/routes.log');
    const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
    logStream.write(`[${new Date().toISOString()}] ${req.method} ${req.url} ${req.ip}\n`);
}

// --------->>>> GET <<<<<---------
const FemaleGetData = async (req, res) => {
    try {
        const data = await FemaleModel.find()
        res.status(202).send(data);
        Logs(req);
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}


// --------->>>> POST <<<<<---------
const FemalePostData = async () => {
    const payload = req.body;
    try {
        const data = new FemaleModel(payload);
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
const FemalePatchData = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await FemaleModel.findByIdAndUpdate({ _id: ID }, payload)
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
const FemaleDeleteData = async (req, res) => {
    const ID = req.params.id;
    try {
        await FemaleModel.findByIdAndDelete({ _id: ID })
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

module.exports = { FemaleGetData , FemalePostData , FemalePatchData, FemaleDeleteData }