const userCtrl = require('../controllers/user.controller');
const checkAdmin = {};

checkAdmin.isAdmin = (req, res, next) => {     
        
    console.log(req.body.email);
        //Verificar si es administrador
        const userAdmin = userCtrl.getUser(req, res);
        console.log(userAdmin);

        next();
    

};

module.exports = checkAdmin;