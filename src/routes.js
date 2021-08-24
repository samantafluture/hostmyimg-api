const routes = require('express').Router();
const multer = require('multer');

routes.get('/', (req, res) => {
    return res.json({ message: 'Welcome to HostMyImg API!' });
});

routes.post('/posts', (req, res) => {
    return res.json();
});


module.exports = routes;
