const express = require('express');

// --------------->>>>>>>> Feedback Service Controller <<<<<<<<-------------------
const { FeedbackPostData } = require('../controllers/feedbackForm.controller');

const FeedbackRouter = express.Router();


// --->>>> POST <<<<<--- 
FeedbackRouter.post('/forms', FeedbackPostData )


module.exports = { FeedbackRouter };