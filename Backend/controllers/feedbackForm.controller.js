// --------------->>>>>>>> Feedback Model Location <<<<<<<<-------------------

const { FeedbackModel } = require("../model/feedbackForm.model");


// --------->>>> POST <<<<<---------

const FeedbackPostData = async (req,res) => {
    try {
        const data = req.body;

        const form = new FeedbackModel(data);
        await form.save();

        res.status(200).json("Feedback Updated");
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}


module.exports = { FeedbackPostData }