const express = require("express");
const redis = require("redis");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const { userRouter } = require("./routes/user.route");
const { authenticate } = require("./middlewares/authenticate.middleware");
const { LogsData } = require("./middlewares/log.middleware");
const { LogoutRouter } = require("./routes/logout.route");
const { dbconnetion } = require("./configs/db");
const { GntRouter } = require("./routes/generateNewToken.route");
const http = require("http");
const { githublogin } = require("./routes/github.oauth.route");
const passport = require("passport");
const { googlelogin } = require("./routes/google.oauth.route");
const { AdminRouter } = require("./routes/admin.router");
const { MaleRouter } = require("./routes/maleService.route");
const { FemaleRouter } = require("./routes/femaleService.route");
const { StylistRouter } = require("./routes/stylist.router");
const {appointmentRouter} = require("./routes/appointment.router");
const app = express();
const server = http.createServer(app);


// --------------->>>>>>>> Default End Point <<<<<<<<-------------------


app.get("/", (req, res) => res.send(`<h1 style="text-align:Center;color:purple">Welcome in Snips & Spikes API</h1>`));


// --------------->>>>>>>> Middlewares <<<<<<<<-------------------

app.use(cors());
app.use(cookieParser());
app.use(express.json());


// --------------->>>>>>>> Secret key for Express sessions <<<<<<<<-------------------

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


// --------------->>>>>>>> Oauth <<<<<<<<-------------------

// app.use("/", githublogin);
app.use("/", googlelogin);


// --------------->>>>>>>> Routers <<<<<<<<-------------------
app.use(LogsData);
app.use("/user", userRouter);
app.use("/admin", AdminRouter)
app.use("/services", MaleRouter);
app.use("/services", FemaleRouter);
app.use("/stylist", StylistRouter)

app.use("/appointments",appointmentRouter);

app.use("/newtoken", authenticate,GntRouter);
app.use("/logout",authenticate,LogoutRouter);


// --------------->>>>>>>> Server Running <<<<<<<<-------------------

app.listen(process.env.port, async () => {
  try {
    dbconnetion;
    console.log(`Connected to Database`);
    console.log(`Server listening on ${process.env.port}`);
  } catch (error) {
    console.log(`Error while connecting to ${error.message}`);
  }
});
