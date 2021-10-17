var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var saveToken = require('../../../utils/saveToken.js');
var randomToken = require('random-token');
var md5 = require('md5');

//Authentication
const auth = (req, res) => {
   //Get params
   const username = req.body.username;
   const password = md5(req.body.password);
   const sql = `SELECT * FROM User WHERE 
      username = "${username}" AND 
      password = "${password}"`;
   //Query to DB
   connection.query(sql, (err, rows, fields) => {
      if (err) response.serverError('MySql Error', res);
      else {
         //Validation action
         if ( rows.length > 0 ) {
            //Generate random token here
            const TOKEN = randomToken(100);
            //Save information about the succes Authentication into Table User
            saveToken(connection, TOKEN, username);
            //Send the token to client to save into cookie
            //Make a response
            console.log('Auth success')
            response.success({ TOKEN }, res);
         } else {
            response.forbidden('Authentication invalid, username or password cannot find on Database', res);
         }
      }
   })  
}

module.exports = auth;