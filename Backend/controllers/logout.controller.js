const { blackListModel } = require("../model/blacklist.model");


const LogoutData =  async (req, res)=>{
    const Normal_Token = req.cookies.Normal_Token || "";

    const tokenData = new blackListModel({
        tokenList : Normal_Token
    });
    await tokenData.save();

    res.status(200).send("Log Out Successfully");
}

module.exports = { LogoutData }