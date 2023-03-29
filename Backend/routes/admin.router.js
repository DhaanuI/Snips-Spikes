const express = require('express');
const { AdminData } = require('../controllers/admin.controller');

const AdminRouter = express.Router();


AdminRouter.post('/check',AdminData);


module.exports = { AdminRouter };