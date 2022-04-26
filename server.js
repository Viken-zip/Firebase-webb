const express = require('express');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const server = express();
const indexRouter = require('./controller/index');
const decodeIdToken = require('./config/auth');

//view engine
server.set('view engine', 'ejs');
server.set('layout', 'layouts/layout');
server.use(expressLayout);
server.use(express.urlencoded({extended: true}));
server.use(cookieParser());
server.use(express.static('public'));
server.use(express.json());
//server.use(decodeIdToken);
server.use('/', indexRouter);

server.listen(process.env.PORTS, ()=>{
    console.log('server connected');
});