require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
routes(app);

/**
 * Database setup
 */
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
});

app.use(cors());
app.use(morgan('dev'));
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);

/**
 * Server setup
 */
app.listen(process.env.PORT || 3000, () => {
    console.log('HostMyImg API is running :D');
});

module.exports = app;
