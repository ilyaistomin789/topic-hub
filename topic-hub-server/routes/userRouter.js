const { Router } = require('express');
const UserController = require('../controllers/userController');
const router = Router();

router.get('/user', UserController.getUsers);
router.get('/user/:id', UserController.getUserById);
router.put('/user/:id', UserController.editUserById);
router.delete('/user/:id', UserController.deleteUserById);

module.exports = router;
