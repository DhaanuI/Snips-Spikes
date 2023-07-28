const express = require('express');


// --------------->>>>>>>> Stylist Controller <<<<<<<<-------------------
const { StylistGetData , StylistPostData , StylistPatchData , StylistDeleteData} = require('../controllers/stylist.controller');

const StylistRouter = express.Router();


// --------->>>> GET <<<<<---------
StylistRouter.get('/styler', StylistGetData);


// --------->>>> POST <<<<<--------- 
StylistRouter.post('/styler/addStylistService', StylistPostData);


// --------->>>> PATCH <<<<<---------
StylistRouter.patch('/styler/update/:id', StylistPatchData);


// --------->>>> DELETE <<<<<---------
StylistRouter.delete('/styler/delete/:id', StylistDeleteData);

module.exports = { StylistRouter }  