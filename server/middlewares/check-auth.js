const jwt = require('jsonwebtoken');

module.exports = checkAuth;

function checkAuth(roles = []) {

    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        // authorize based on user role
        (req, res, next) => {

            const token = req.headers.authorization.split(' ')[1];
        
        //Validamos que el token contenga algo
            if (typeof token !== 'undefined') {
                // authenticate JWT token and attach user to request object
                const decoded = jwt.verify(token, 'miclavesecreta');
                req.userData = decoded;
            }

            if (roles.length && !roles.includes(req.userData.role)) {
                // user's role is not authorized
                return res.status(401).json({ message: 'Unauthorized' });
            }

            // authentication and authorization successful
            next();
        }
    ];
}