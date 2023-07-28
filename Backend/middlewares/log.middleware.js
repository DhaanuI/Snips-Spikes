// --------->>>> Logs Model Location <<<<<---------
const { LogModel } = require("../model/logModel");


const LogsData = async (req,res,next) => {
    try {
        const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const data = new LogModel({
            DateandTime: `${new Date()}`,
            Method: `${req.method}`,
            URL: `${req.url}`,
            IP: `${clientIP}`
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