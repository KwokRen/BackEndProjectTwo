///////////////////////////
///////DEPENDENCIES////////
///////////////////////////

require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

/////////////////////////////
///////GLOBAL VARIABLES//////
/////////////////////////////

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const mongoURI = process.env.mongoURI + "fitness"
const db = mongoose.connection;
const mongoConfigObject = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(mongoURI, mongoConfigObject, () => {
    console.log("CONNECTED TO MONGO");
  });
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected!"));
db.on("disconnected", () => console.log("mongo disconnected"));

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

NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

////////////////
/////ROUTES/////
////////////////

app.get("/", (req, res) => {
    res.send("This server is running like it should")
})

//////////////////////
///////LISTENER///////
//////////////////////

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });