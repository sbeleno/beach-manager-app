const User = require('../models/user');
const bcrypt = require('bcrypt');
const userCtrl = {};

userCtrl.signup = (req, res) => {
    //Validamos que existan
    if (!req.body.email && !req.body.password) return res.json({'status': 'User invalid'});

    //Validamos que el usuario exista en base de datos
    User.find({email: req.body.email}).then(result => {
        if (result.length >= 1) {
            return res.json({'status': 'Mail exists!'});
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({error: err});
                } else {
                    const user = new User({
                        email: req.body.email,
                        password: hash,
                        role: req.body.role
                    });
                    user.save()
                        .then(result => {res.status(201).json({'status': 'User saved'});})
                        .catch(err => {res.status(500).json({error: err});})
                }        
            });                
        }
    });  
};

userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id).then(result => {
        res.status(200).json({status: 'User deleted'}); 
    }).catch (err => {
        res.json({'error': err});
    });      
};

userCtrl.getUser = (req, res) => {
    User.findOne({email: req.body.email}).then( result => {
        console.log(user)
        res.json(user);
    }).catch (err => {
        res.json({'error': err});
    });    
};

/*userCtrl.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({'status': 'User saved'});
};

userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);   
    res.status(200).json({status: 'User deleted'}); 
};*/



module.exports = userCtrl;