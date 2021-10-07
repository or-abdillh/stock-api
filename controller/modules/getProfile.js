var connection = require('../../connection/conn.js');
var response = require('../../response/response.js');

//import utils for TOKEN validation
var tokenValidation = require('../../utils/tokenValidation.js');

//Get profile 
const getProfile = (req, res) => {
   //Get data from body
   const body = {
      TOKEN: req.body.TOKEN,
      username: req.body.username
   }
   
   //Create method for query
   const queryProfile = token => {
      //Query SQL
      const sql = `SELECT * FROM User WHERE username = "${body.username}"`;
      
      //Validation
      if ( token ) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError('MySql Error', res);
            //Make response
            response.success(rows, res);
         })
      } else {
         response.forbidden('Token invalid', res);
      }
   }
   
   //call tokenValidation()
   tokenValidation(connection, body, queryProfile);
}

module.exports = getProfile;