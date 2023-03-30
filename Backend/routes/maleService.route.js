const express = require('express');

// --------------->>>>>>>> Male Service Router <<<<<<<<-------------------
const { MaleData } = require('../controllers/maleService.controller');

const MaleRouter = express.Router();


MaleRouter.post('/male',MaleData);


module.exports = { MaleRouter }