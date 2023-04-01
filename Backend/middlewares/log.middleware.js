// --------->>>> Logs Model Location <<<<<---------
const { LogModel } = require('../model/logModel');


const LogsData = async (req,res,next) => {
    try {
        const data = new LogModel({
            DateAndTime :`${new Date().toISOString()}`,
            Method :`${req.method}`,
            URL :`${req.url}`,
            IP : `${req.ip}`
        })
        await data.save();
        next();
    } catch (error) {
        res.status(404).send({
            "Message": "Error in Middleware Logs"
        })
    }
}

module.exports = { LogsData }