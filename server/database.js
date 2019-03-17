const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/mean-crud';
const URI = 'mongodb+srv://shirley:shirley140@cluster0-acdb4.mongodb.net/test?retryWrites=true';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;