const Employee = require('../models/employee');
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find().populate('beach');
    res.status(200).json(employees);
};

employeeCtrl.createEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save().then( result => {
        res.status(201).json({'status': 'Employee saved'});
    });
    
};

employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
};

employeeCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        email: req.body.email,
        beach: req.body.beach,
        phone: req.body.phone,
        gender: req.body.gender
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.status(200).json({status: 'Employee updated'});
}

employeeCtrl.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);   
    res.status(200).json({status: 'Employee deleted'}); 
}

module.exports = employeeCtrl;