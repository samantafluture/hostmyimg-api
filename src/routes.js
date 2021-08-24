const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.get('/', (req, res) => {
    return res.json({ message: 'Welcome to HostMyImg API!' });
});

routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    return res.json({ message: 'arquivo recebido!' });
});

module.exports = routes;
