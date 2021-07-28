const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const PORT = 4000;

// middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_CONN_STRING, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Connected to Mongooooooose');
  })
  .catch((error) => console.log(error));

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
