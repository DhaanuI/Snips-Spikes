const express = require('express');

// --------------->>>>>>>> Female Service Router <<<<<<<<-------------------
const { FemaleData, FemaleGetData, FemalePatchData, FemaleDeleteData } = require('../controllers/FemaleServiceController');


const FemaleRouter = express.Router();

FemaleRouter.get('/female', FemaleGetData);
FemaleRouter.post('/female/addFemaleService', FemaleData);
FemaleRouter.patch('/female/update/:id', FemalePatchData);
FemaleRouter.delete('/female/delete/:id', FemaleDeleteData);


module.exports = { FemaleRouter }