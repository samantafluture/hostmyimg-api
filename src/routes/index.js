const express = require('express');

const auth = require('./authRoutes');
const user = require('./userRoutes');
const post = require('./postRoutes');

module.exports = (app) => {
    app.use(express.json(), post, auth);
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        res.json({ message: 'Welcome to HostMyImg API :D' });
    });
};
