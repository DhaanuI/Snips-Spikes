const express = require('express');

// --------------->>>>>>>> Female Service Router <<<<<<<<-------------------
const {  FemaleGetData, GetFemaleSingleData, FemalePostData, FemalePatchData, FemaleDeleteData } = require('../controllers/FemaleServiceController');

const FemaleRouter = express.Router();


// --->>>> GET <<<<<--- 
FemaleRouter.get('/female', FemaleGetData);


// --->>>> GET <<<<<---  ||  --->>>> GetSingle Service <<<<<---
FemaleRouter.get('/female/:id', GetFemaleSingleData);

// --->>>> POST <<<<<--- 
FemaleRouter.post('/female/addFemaleService', FemalePostData);


// --->>>> PATCH <<<<<--- 
FemaleRouter.patch('/female/update/:id', FemalePatchData);


 
// --->>>> DELETE <<<<<--- 
FemaleRouter.delete('/female/delete/:id', FemaleDeleteData);


module.exports = { FemaleRouter }