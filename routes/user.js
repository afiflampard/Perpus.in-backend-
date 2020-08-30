const { Router } = require('express');
const express = require('express');
const route = express.Router() 


const {requireSignin} = require('../controllers/auth');
const {userById} = require('../controllers/user');


route.get('/secret/:userId',requireSignin, (req,res)=>{
    res.json({
        user : req.profile,
    })
});
route.param("userId",userById);

module.exports = route;