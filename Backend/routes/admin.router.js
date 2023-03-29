const express = require('express');

const AdminRouter = express.Router();


AdminRouter.post('/check',AdminData);


module.exports = { AdminRouter };