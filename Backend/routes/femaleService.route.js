const express = require('express');

// --------------->>>>>>>> Male Service Router <<<<<<<<-------------------
const { FemaleData } = require('../controllers/femaleService.controller');


const FemaleRouter = express.Router();


FemaleRouter.post('/female',FemaleData);


module.exports = { FemaleRouter }