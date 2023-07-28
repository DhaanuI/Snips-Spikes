const express = require ("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

require("dotenv").config();


const { dbconnetion } = require("./config/db");
const { UserRouter } = require("./routes/user.route");
const { authenticate } = require("./middlewares/authenticate.middleware");
const { LogsData } = require("./middlewares/log.middleware");
const { GntRouter } = require("./routes/generateNewToken.route");
const { AdminRouter } = require("./routes/admin.router");
const { MaleRouter } = require("./routes/maleService.route");
const { FemaleRouter } = require("./routes/femaleService.route");
const { StylistRouter } = require("./routes/stylist.router");
const { AppointmentRouter } = require("./routes/appointment.router");
const { LogoutRouter } = require("./routes/logout.route");
const { FeedbackRouter } = require("./routes/feedbackForm.route");


// --------------->>>>>>>> Middlewares <<<<<<<<-------------------

app.use(cors());
app.use(cookieParser());
app.use(express.json());


// --------------->>>>>>>> Default End Point <<<<<<<<-------------------

app.get("/", (req, res) => res.send(`<h1 style="text-align:Center;color:purple">Welcome in Snips & Spikes API</h1>`));



// --------------->>>>>>>> Routers <<<<<<<<-------------------
app.use(LogsData);
app.use("/user", UserRouter);
app.use("/admin", AdminRouter)
app.use("/services", MaleRouter);
app.use("/services", FemaleRouter);
app.use("/stylist", StylistRouter);
app.use("/appointments", AppointmentRouter);
app.use("/feedback" , FeedbackRouter)

app.use(authenticate);
app.use("/newtoken", GntRouter);
app.use("/logout", LogoutRouter);


// --------------->>>>>>>> Server Running <<<<<<<<-------------------

app.listen(process.env.PORT, async () => {
  try {
    dbconnetion;
    console.log(`Connected to Database`);
    console.log(`Server listening on ${process.env.PORT}`);
  } catch (error) {
    console.log(`Error while connecting to ${error.message}`);
  }
});
