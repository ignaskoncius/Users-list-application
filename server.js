const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express()

// middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.listen(4000);