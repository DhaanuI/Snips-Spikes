const fs = require('fs');
const path = require('path');

// --------->>>> Logs of Router <<<<<---------

const LogsData = (req,res,next) => {
    const logFilePath = path.join(__dirname, '../logs/routes.log');
    const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
    logStream.write(`DateAndTime: [${new Date().toISOString()}] Method: ${req.method}  URL: ${req.url} IP: ${req.ip}\n`);
    next();
}

module.exports = { LogsData }