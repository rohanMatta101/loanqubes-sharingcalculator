const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const adminroutes=require('./ADMIN');
const app=express();
const helmet=require('helmet');
const compression=require('compression');
const morgan=require('morgan');
console.log(process.env.NODE_ENV);
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'CSS')));
app.set('view engine','ejs');
app.set('views','views');
app.use(adminroutes.routes);





app.listen(process.env.PORT || 3000);