// --------------->>>>>>>> Male Service Model Location <<<<<<<<-------------------
const { MaleModel } = require("../model/MaleServiceModel");



const MaleData = async (req, res) => {
    const payload = req.body;
    try {
        const data = new MaleModel(payload);
        await data.save();
        //console.log(data);

        res.status(202).send({
            Message: "Data saved successfully",
        });

    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

const MaleGetData = async (req, res) => {
    try {
        const data = await MaleModel.find()
        res.status(202).send(data);

    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

const MalePatchData = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await MaleModel.findByIdAndUpdate({ _id: ID }, payload)
        res.status(202).send({
            Message: "Data successfully modified",
        });
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

const MaleDeleteData = async (req, res) => {
    const ID = req.params.id;
    try {
        await MaleModel.findByIdAndDelete({ _id: ID })
        res.status(202).send({
            Message: "Data successfully deleted",
        });
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

module.exports = { MaleData, MaleGetData, MalePatchData, MaleDeleteData }