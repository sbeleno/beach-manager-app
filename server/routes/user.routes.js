const express = require('express');
const checkAuth = require('../middlewares/check-auth');
const Role = require('../models/enum-role');
const router = express.Router();

const user = require('../controllers/user.controller');

router.post('/', checkAuth(Role.Admin), user.signup);
router.delete('/:id', checkAuth(Role.Admin), user.deleteUser);

module.exports = router;