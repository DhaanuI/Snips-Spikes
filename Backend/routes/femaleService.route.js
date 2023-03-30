const express = require('express');

// --------------->>>>>>>> Male Service Router <<<<<<<<-------------------
const { FemaleData } = require('../controllers/FemaleServiceController');


const FemaleRouter = express.Router();


FemaleRouter.post('/female',FemaleData);


module.exports = { FemaleRouter }