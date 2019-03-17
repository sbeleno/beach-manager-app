const express = require('express');
const checkAuth = require('../middlewares/check-auth');
const Role = require('../models/enum-role');
const router = express.Router();

const beach = require('../controllers/beach.controller');

router.get('/', checkAuth(Role.Admin), beach.getBeaches);
router.post('/', checkAuth(Role.Admin), beach.createBeach);
router.get('/:id', checkAuth(Role.Admin), beach.getBeach);
router.put('/:id', checkAuth(Role.Admin), beach.updateBeach);
router.delete('/:id', checkAuth(Role.Admin), beach.deleteBeach);

module.exports = router;