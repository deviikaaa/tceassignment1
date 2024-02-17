// app.js
const commonMiddleware = require('./middleware/commonMiddleware');
app.use(commonMiddleware);
const configurableMiddleware = require('./middleware/configurableMiddleware');
app.use(configurableMiddleware({ option1: 'value1', option2: 'value2' }));

const express = require('express');
const app = express();
const PORT = 3000; 

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
