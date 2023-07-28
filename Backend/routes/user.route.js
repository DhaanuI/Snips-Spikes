const express = require ("express");

// --------------->>>>>>>> Male Service Controller <<<<<<<<-------------------
const {signup ,login ,getalluser ,getUser} = require("../controllers/user.controller");

const UserRouter = express.Router();


// --------->>>> GET <<<<<---------
UserRouter.get("/", getalluser);

// --------->>>> GET BY ID<<<<<---------
UserRouter.get("/:id", getUser);

// --------->>>> POST SIGN UP <<<<<---------
UserRouter.post("/register", signup);

// --------->>>> POST <<<<<--------- 
UserRouter.post("/login", login);

module.exports = { UserRouter }  

