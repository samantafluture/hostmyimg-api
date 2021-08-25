const { Router } = require('express');
const { PostController } = require('./../controllers');
const multer = require('multer');
const multerConfig = require('../config/multer');

const router = Router();

router
    .get('/posts', PostController.getAllPosts)
    .post('/posts', multer(multerConfig).single('file'), PostController.createPost)
    .delete('/posts/:id', PostController.deletePost);

module.exports = router;
