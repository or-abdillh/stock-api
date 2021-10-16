var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');

//import utils for TOKEN validation
var tokenValidation = require('../../../utils/tokenValidation.js');

//Get product 
const getProducts = (req, res) => {
   //Get data from body
   const body = {
      TOKEN: req.body.TOKEN
   }
   
   //Create method for query
   const queryProducts = token => {
      //Query SQL
      const sql = `SELECT * FROM Products ORDER BY last_modified DESC`;
      
      //Validation
      if ( token ) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            //Make response
            response.success(rows, res);
         })
      } else {
         response.forbidden('Token invalid', res);
      }
   }
   
   //call tokenValidation()
   tokenValidation(connection, body, queryProducts);
}

module.exports = getProducts;