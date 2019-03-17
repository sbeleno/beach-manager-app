const mongoose = require('mongoose');
const { Schema } = mongoose;

const BeachSchema = new Schema({
    name: { type: String, required: true },
    percentage: { type: Number, required: true },
});

module.exports = mongoose.model('Beach', BeachSchema);
