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

module.exports = { FemaleData }