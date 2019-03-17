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

app.use(express.static('build'));

/*app.use((req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE,GET');
        return res.status(200).json({});
    }
});*/

// Routes
app.use('/api/signup', require('./routes/user.routes'));
app.use('/api/login', require('./routes/login.routes'));
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/beaches', require('./routes/beach.routes'));

app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});