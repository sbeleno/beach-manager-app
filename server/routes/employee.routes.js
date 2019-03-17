const express = require('express');
const checkAuth = require('../middlewares/check-auth');
const Role = require('../models/enum-role');
const router = express.Router();

const employee = require('../controllers/employee.controller');

router.get('/', checkAuth(Role.Admin), employee.getEmployees);
router.post('/', checkAuth(Role.Admin), employee.createEmployee);
router.get('/:id', checkAuth(Role.Admin), employee.getEmployee);
router.put('/:id', checkAuth(Role.Admin), employee.editEmployee);
router.delete('/:id', checkAuth(Role.Admin), employee.deleteEmployee);

module.exports = router;