const express = require("express");

// --------------->>>>>>>> Admin Controller <<<<<<<<-------------------
const { AdminData } = require("../controllers/admin.controller");

const AdminRouter = express.Router();

// --------->>>> POST <<<<<--------- 
AdminRouter.post("/check",AdminData);


module.exports = { AdminRouter };