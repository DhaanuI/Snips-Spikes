const express = require('express');

// --------------->>>>>>>> Male Service Router <<<<<<<<-------------------
const { MaleGetData, MalePostData, MalePatchData, MaleDeleteData } = require('../controllers/MaleServiceController');

const MaleRouter = express.Router();


// --------->>>> GET <<<<<---------
MaleRouter.get('/male', MaleGetData);


// --------->>>> POST <<<<<--------- 
MaleRouter.post('/male/addMaleService', MalePostData);


// --------->>>> PATCH <<<<<---------
MaleRouter.patch('/male/update/:id', MalePatchData);


// --------->>>> DELETE <<<<<---------
MaleRouter.delete('/male/delete/:id', MaleDeleteData);

module.exports = { MaleRouter }  