const { Router } = require('express');
const { authJwt } = require('../middlewares');
const { UserController } = require('./../controllers');

const router = Router();

router
    .get('/users/free', UserController.getAllUsers)

    .get('/users', [authJwt.verifyToken], UserController.getAllUsers)
    .get('/users/:id', [authJwt.verifyToken], UserController.getUserById)
    .delete('/users/:id', [authJwt.verifyToken], UserController.deleteUser);

module.exports = router;
