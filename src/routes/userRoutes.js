// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const passport = require('passport');
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getProfile);

module.exports = router;
