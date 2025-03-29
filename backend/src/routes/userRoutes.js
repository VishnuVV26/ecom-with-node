const express = require('express')
const { check } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/userController');
const UserRouter = express.Router();

UserRouter.post('/users/signup', [check("name", "Name is required").not().notEmpty(),
check("email", "Enter a valid Email").isEmail(),
check("password", "Password must be should 6 characters").isLength({ min: 6 }),
    registerUser
])
UserRouter.post('/users/login', loginUser)

module.exports = UserRouter;