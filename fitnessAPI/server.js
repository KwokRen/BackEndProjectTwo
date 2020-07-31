///////////////////////////
///////DEPENDENCIES////////
///////////////////////////

require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const db = mongoose.connection;
