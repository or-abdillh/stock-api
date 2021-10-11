const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const routes = require('./router/router.js');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

//Make upload folder publically available
app.use('/public', express.static('public'));

//Routing
routes(app);

app.listen(port, () => {
   console.log('Stock App backend service')
   console.log(`Start time : ${new Date()}`);
   console.log(`Server running at http://localhost:${port}/`);
});