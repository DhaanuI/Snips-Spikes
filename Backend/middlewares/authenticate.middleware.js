const jwt = require("jsonwebtoken");
const fs = require("fs");
const { blackListModel } = require("../model/blacklist.model");

require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
      const Normal_Token = req.cookies.Normal_Token || "";


    // Check if the token is blacklisted
    const blacklistedToken = await blackListModel.findOne({
      tokenList: Normal_Token,
    });

    if (blacklistedToken) {
      return res.status(401).json({ message: "Please login again" });
    }
    
    jwt.verify(Normal_Token, process.env.NORMALKEY, (err, decoded) => {
          if (err) res.status(err).json({ message: err.message });
          else {
            next();
          }
    });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { authenticate }
