const path = require("path");
const fs = require("fs");
require("dotenv").config();

// --------->>>> Logs of Router <<<<<---------
function Logss(req) {
  const logFilePath = path.join(__dirname, '../logs/adminroutes.log');
  const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
  logStream.write(`DateAndTime: [${new Date().toISOString()}] Method: ${req.method} URL: ${req.url} IP: ${req.ip}\n`);
}

const AdminData = async (req, res) => {
  try {
    const { UserName, Password } = req.body;

    if (UserName == process.env.user && Password == process.env.pass) {
      res.status(202).send({
        Message: "Welcome Admin",
        Location: "../html/adminDashboard.html"
      });
      Logss(req);
    } else {
      res.status(404).send({
        Message: "You are not Authorized",
      });
    }
  } catch (error) {
    res.status(404).send({
      Message: "You are not Authorized",
    });
  }
};

module.exports = { AdminData };
