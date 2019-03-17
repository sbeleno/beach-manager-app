const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    beach: { type: Schema.ObjectId, ref: "Beach" },
    gender: { type: String, required: true } 
});

module.exports = mongoose.model('Employee', EmployeeSchema);
