const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middlewares
app.use(morgan('dev'));
//app.use(cors({origin: 'http://localhost:4200'}));
app.use(cors());

// Serve static assets if in production
if (process.env.NODE_ENV ==='production') {
    // Set stactic folder
    app.use(express.static('../frontend/dist/frontend'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname , '../frontend', 'dist/frontend', 'index.html'));
    });
}

// Routes
app.use('/api/signup', require('./routes/user.routes'));
app.use('/api/login', require('./routes/login.routes'));
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/beaches', require('./routes/beach.routes'));


app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});