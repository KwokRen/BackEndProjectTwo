///////////////////////////
///////DEPENDENCIES////////
///////////////////////////

// configuring dotenv for the server
require('dotenv').config();
// requiring express so our server can use server
const express = require('express');
// app is using express package
const app = express();
// requiring morgan will help us debug more
const morgan = require('morgan');
// requiring cors to see which sites can connect or not to make it more secure
const cors = require('cors');
// requiring mongoose so front end can communicate with back end
const mongoose = require('mongoose');
const fitnessRouter = require('./routes/fitness.js');

/////////////////////////////
///////GLOBAL VARIABLES//////
/////////////////////////////

// PORT from our .env file
const PORT = process.env.PORT;
// NODE_ENV from our .env file
const NODE_ENV = process.env.NODE_ENV;
// mongoURI from our .env file
const mongoURI = process.env.mongoURI + "fitness";
// storing our mongoose.connection inside a variable
const db = mongoose.connection;
// to configure deprecation warnings
const mongoConfigObject = { useNewUrlParser: true, useUnifiedTopology: true };

// connecting our mongoose to our server
mongoose.connect(mongoURI, mongoConfigObject, () => {
    console.log("CONNECTED TO MONGO");
  });
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected!"));
db.on("disconnected", () => console.log("mongo disconnected"));

///////////////////////
//////////CORS/////////
///////////////////////

const whitelist = ["http://localhost:3000/"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error("Not allowed by CORS, domain needs to be added to whitelist")
      );
    }
  },
};
// if NODE_ENV is in development stage, cors will limit the websites
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));
// translating json 
app.use(express.json());
// when we use dev to start up server, morgan can keep track or errors or successes
app.use(morgan("dev"));
// setting up a static HTML folder called public (we don't have one)
app.use(express.static("public"));

////////////////
/////ROUTES/////
////////////////

app.use("/fitness", fitnessRouter);
// app.use("/food", foodRouter);


app.get("/", (req, res) => {
    res.send("This server is running like it should")
})

//////////////////////
///////LISTENER///////
//////////////////////

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });