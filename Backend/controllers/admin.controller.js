require("dotenv").config();


const AdminData = async (req, res) => {
  try {
    const { UserName, Password } = req.body;

    if (UserName == process.env.user && Password == process.env.pass) {
      res.status(202).send({
        Message: "Welcome Admin",
        Location: "../html/adminDashboard.html"
      });
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
