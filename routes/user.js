const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');


// GET user details by user_id
router.get('/details/:user_id', UserController.getUserDetails);

// PUT update user details
router.put('/update', UserController.updateUser);

// GET user image by user_id
router.get('/image/:user_id', UserController.getUserImage);

// POST insert a new user
router.post('/insert', UserController.insertUser);

// DELETE user by user_id
router.delete('/delete/:user_id', UserController.deleteUser);

module.exports = router;
