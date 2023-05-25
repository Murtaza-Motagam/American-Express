const  jwt = require('jsonwebtoken');
const JWT_SECRET = "UserIsValidated";

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add it to the req object

    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({error: "Please authenticate using valid token"});
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.holder = data.holder;
        next();    
    } 
    catch (error) {
        res.status(401).send({error: "Please authenticate using valid token"});
    }
}

module.exports = fetchuser;