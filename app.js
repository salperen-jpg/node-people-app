const express = require('express');
const app = express();
const people = require('./routes/People');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');

const PORT = 5000;
app.use(express.json());
app.use('/api/v1/people', people);

// error middleware
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is running on port ${5000}`));
  } catch (error) {
    console.log(error);
  }
};

start();
