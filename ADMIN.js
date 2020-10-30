const express=require('express');
const routes=express.Router();
const bodyParser=require('body-parser');
const admin=require('./Controllers/admin');
routes.use(bodyParser.urlencoded({extended:false}));


routes.get('/',admin.getCalc);
routes.post('/post-calc',admin.postCalc);




exports.routes=routes;