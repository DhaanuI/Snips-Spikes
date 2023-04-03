// --------------->>>>>>>> Stylist Model Location <<<<<<<<-------------------
const { StylistModel } = require("../model/stylist.model");


// --------->>>> GET <<<<<---------
const StylistGetData = async (req, res) => {
    try {
        const data = await StylistModel.find()
        res.status(200).send(data);
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
        res.status(200).send({
            Message: "Data saved successfully",
        });
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
    console.log(ID,payload)
    try {
        await StylistModel.findByIdAndUpdate({ _id: ID }, payload)
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
const StylistDeleteData = async (req, res) => {
    const ID = req.params.id;
    try {
        await StylistModel.findByIdAndDelete({ _id: ID })
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

module.exports = {  StylistGetData, StylistPostData, StylistPatchData, StylistDeleteData }