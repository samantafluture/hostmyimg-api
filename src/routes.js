const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Welcome to the HostMyImg API!' });
});

module.exports = routes;
