const express = require('express');

// --------------->>>>>>>> Female Service Router <<<<<<<<-------------------
const {  FemaleGetData,getFemaleSingleData, FemalePostData, FemalePatchData, FemaleDeleteData } = require('../controllers/FemaleServiceController');

const FemaleRouter = express.Router();


// --->>>> GET <<<<<--- 
FemaleRouter.get('/female', FemaleGetData);

// getsingle service
FemaleRouter.get('/female/:id', getFemaleSingleData);

// --->>>> POST <<<<<--- 
FemaleRouter.post('/female/addFemaleService', FemalePostData);


// --->>>> PATCH <<<<<--- 
FemaleRouter.patch('/female/update/:id', FemalePatchData);


 
// --->>>> DELETE <<<<<--- 
FemaleRouter.delete('/female/delete/:id', FemaleDeleteData);


module.exports = { FemaleRouter }