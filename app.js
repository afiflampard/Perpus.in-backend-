const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

//import Routes
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
require('dotenv').config({path:'./env'});

//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>console.log("DB Connected"));


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

//routes middleware
app.use("/api",authRouter);
app.use("/api",userRouter);

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})
