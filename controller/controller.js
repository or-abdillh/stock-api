 'use strict';

var response = require('../response/response.js');
var connection = require('../connection/conn.js');
var saveToken = require('../utils/saveToken.js');
var randomToken = require('random-token').create('AOsphuiTRYEP0342156v');

//INDEX
const index = (req, res) => {
   response.success('API Sukses berjalan dengan baik', res)
}

//Authentication
const auth = (req, res) => {
   //Get params
   const username = req.body.username;
   const password = req.body.password;
   const sql = `SELECT * FROM User WHERE 
      username = "${username}" AND 
      password = "${password}"`;
   //Query to DB
   connection.query(sql, (err, rows, fields) => {
      if (err) throw err;
      //Validation action
      if ( rows.length > 0 ) {
         //Generate random token here
         const TOKEN = randomToken(50);
         //Save information about the succes Authentication in cookie
         res.cookie('TOKEN', TOKEN);
         //Save information about the succes Authentication into Table User
         saveToken(connection, TOKEN, username);
         //Make a response
         response.authSuccess('Authentication valid', res);
      } else {
         response.authInvalid('Authentication invalid, username or password cannot find on Database', res);
      }
   })  
}

//Exports
module.exports = {
   index,
   auth
}