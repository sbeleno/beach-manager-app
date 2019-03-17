const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginCtrl = {};

loginCtrl.authenticate = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {

            if (user.length < 1) {
                return res.json({'message': 'User doesn\'t exist' });
            }

            //Se comparan las contraseñas de forma encriptada
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json({'message': 'Auth failed' });
                }

                if (result) {
                    const token = jwt.sign({email: user.email,userId: user._id,role: user.role}, 'miclavesecreta', {expiresIn: '1h'});
                    return res.status(200).json({'message': 'Auth succesful', 'token' : token });
                   
                }
            });

        })
        .catch(err => { res.status(401).json({'message': 'Auth failed'}); });    
};

module.exports = loginCtrl;