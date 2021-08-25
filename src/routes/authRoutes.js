const { Router } = require('express');
const { verifySignUp } = require('../middlewares');
const { AuthController } = require('../controllers');

const router = Router();

router
    .post(
        '/signup',
        [verifySignUp.checkDuplicateUsernameOrEmail],
        AuthController.signup
    )
    .post('/login', AuthController.login);

module.exports = router;
