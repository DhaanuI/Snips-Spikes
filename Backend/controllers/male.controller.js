// --------------->>>>>>>> Male Service Model Location <<<<<<<<-------------------
const { MaleModel } = require("../model/male.model");



// --------->>>> GET <<<<<---------
const MaleGetData = async (req, res) => {
    try {
        const data = await MaleModel.find()
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

// --->>>> GET <<<<<---  ||  --->>>> GetSingle Service <<<<<---
const getMaleSingleData = async (req, res) => {
    const ID = req.params.id;
    try {
        const data = await MaleModel.findById({ _id: ID })
        res.status(200).send({data});
    }
    catch (error) {
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
        res.status(200).send({
            Message: "Data saved successfully",
        });
    } catch (error) {
        res.status(404).send({
            Message:error.message,
        });
    }
}

// --------->>>> PATCH <<<<<---------
const MalePatchData = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await MaleModel.findByIdAndUpdate({ _id: ID }, payload)
        res.status(200).send({
            Message: "Data successfully modified",
        });
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
        res.status(200).send({
            Message: "Data successfully deleted",
        });
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

module.exports = {  MaleGetData, getMaleSingleData,MalePostData, MalePatchData, MaleDeleteData }