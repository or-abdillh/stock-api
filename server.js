const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const routes = require('./router/router.js');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//Routing
routes(app);

app.listen(port, () => {
   console.log('Stock App backend service')
   console.log(`Start time : ${new Date()}`);
   console.log(`Server running at http://localhost:${port}/`);
});