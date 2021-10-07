 'use strict';

var response = require('../response/response.js');
var connection = require('../connection/conn.js');

//connection.query
const setQuery = (sql, res) => {
   connection.query(sql, (err, rows, fields) => {
      if (err) {
         response.internalError(err, res);
         throw(err);
      }   
      else {
         // If reponse is empty list
         if (rows.length == 0) {
            response.noContent(res);
         } else {
            response.success(rows, res);
         }
      }
   })
}


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