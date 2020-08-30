const express = require('express');
const route = express.Router() 


const {
    signup,signin,signout,requireSignin
    } = require('../controllers/auth');
const {signupValidator} = require('../validator/index')

route.post("/signup",signupValidator,signup);
route.post("/signin",signin);
route.get("/signout",signout);

module.exports = route;