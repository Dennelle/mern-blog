const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

// const multer = require('multer')
// const upload = multer()

/*---------- Public Routes ----------*/
router.post('/api/users/signup',  usersCtrl.signup);
router.post('/api/users/login', usersCtrl.login);
router.get('/api/users/:username', usersCtrl.profile);

/*---------- Protected Routes ----------*/
module.exports = router;

/*---------- Protected Routes ----------*/
