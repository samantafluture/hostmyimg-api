const { Router } = require('express');
const { authJwt } = require('../middlewares');
const { PostController } = require('./../controllers');
const multer = require('multer');
const multerConfig = require('../config/multer');

const router = Router();

router
    .get('/posts/free', PostController.getAllPosts)
    .post(
        '/posts/free',
        multer(multerConfig).single('file'),
        PostController.createPost
    )
    .delete('/posts/free/:id', PostController.deletePost)

    .get('/posts', [authJwt.verifyToken], PostController.getAllPosts)
    .get('/posts/:id', [authJwt.verifyToken], PostController.getPostById)
    .get('/posts/users/:id', [authJwt.verifyToken], PostController.getUserByPost)
    .post(
        '/posts',
        [authJwt.verifyToken],
        multer(multerConfig).single('file'),
        PostController.createPost
    )
    .post(
        '/posts/:id',
        [authJwt.verifyToken],
        multer(multerConfig).single('file'),
        PostController.createPostLoggedIn
    )
    .delete('/posts/:id', [authJwt.verifyToken], PostController.deletePost);

module.exports = router;
