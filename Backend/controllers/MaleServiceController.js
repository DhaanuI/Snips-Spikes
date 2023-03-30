// --------------->>>>>>>> Male Service Model Location <<<<<<<<-------------------
const { MaleModel } = require("../model/MaleServiceModel");



const MaleData = async () => {
    const payload = req.body;
    try {
        const data = new MaleModel(payload);
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

module.exports = { MaleData }