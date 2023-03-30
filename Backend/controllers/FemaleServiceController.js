// --------------->>>>>>>> Female Service Model Location <<<<<<<<-------------------
const { FemaleModel } = require("../model/FemaleServicemodel");



const FemaleData = async () => {
    const payload = req.body;
    try {
        const data = new FemaleModel(payload);
        await data.save();
        console.log(data);

        res.status(202).send({
            Message: "Data saved successfully",
        });

    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

const FemaleGetData = async (req, res) => {
    try {
        const data = await FemaleModel.find()
        res.status(202).send(data);

    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

const FemalePatchData = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await FemaleModel.findByIdAndUpdate({ _id: ID }, payload)
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

const FemaleDeleteData = async (req, res) => {
    const ID = req.params.id;
    try {
        await FemaleModel.findByIdAndDelete({ _id: ID })
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

module.exports = { FemaleData, FemaleGetData, FemalePatchData, FemaleDeleteData }