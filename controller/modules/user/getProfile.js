var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');

//import utils for TOKEN validation
var tokenValidation = require('../../../utils/tokenValidation.js');

//Get profile 
const getProfile = (req, res) => {
   //Get data from body
   const body = {
      TOKEN: req.body.TOKEN
   }
   
   //Create method for query
   const queryProfile = token => {
      //Query SQL
      const sql = `SELECT fullname FROM User WHERE token = "${body.TOKEN}"; 
         SELECT id_product FROM Products; SELECT id_category FROM Categorys`;
      
      //Validation
      if ( token ) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError('MySql Error', res);
            //Make response
            response.success({
               fullname: rows[0][0].fullname,
               products: rows[1].length,
               categorys: rows[2].length
            }, res);
            
         })
      } else {
         response.forbidden('Token invalid', res);
      }
   }
   
   //call tokenValidation()
   tokenValidation(connection, body, queryProfile);
}

module.exports = getProfile;