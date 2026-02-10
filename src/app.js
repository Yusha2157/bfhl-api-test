const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bfhlRoutes = require('./routes/bfhlRoutes.js');
const healthRoutes = require('./routes/healthRoutes.js');
const errorHandler = require('./middlewares/errorMiddleware.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/bfhl', bfhlRoutes);
app.use('/health', healthRoutes);

app.use(errorHandler);

module.exports = app;