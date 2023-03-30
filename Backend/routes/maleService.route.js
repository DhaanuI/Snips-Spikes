const express = require('express');

// --------------->>>>>>>> Male Service Router <<<<<<<<-------------------
const { MaleGetData, MaleData, MalePatchData, MaleDeleteData } = require('../controllers/MaleServiceController');


const MaleRouter = express.Router();

MaleRouter.get('/male', MaleGetData);
MaleRouter.post('/male/addMaleService', MaleData);
MaleRouter.patch('/male/update/:id', MalePatchData);
MaleRouter.delete('/male/delete/:id', MaleDeleteData);

module.exports = { MaleRouter }  