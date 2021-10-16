//Get peoducts by name_product and category product

var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');

//import utils for TOKEN validation
var tokenValidation = require('../../../utils/tokenValidation.js');

const searchProducts = (req, res) => {
   //Get TOKEN
   const body = { TOKEN: req.body.TOKEN };
   
   //Get keyword and category product
   const keyword = req.body.keyword;
   const category_product = req.body.category_product;
   
   //Create SQL 
   let sql = `SELECT * FROM Products WHERE name_product LIKE "%${keyword}%"`;
   if ( category_product !== 'all' ) {
      sql +=  ` AND category_product = "${category_product}"`;
   }
   
   const search = token => {
      //Token valid 
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else response.success(rows, res);
         })
      } else response.forbidden('TOKEN invalid', res);
   }
   
   tokenValidation(connection, body, search);
}

module.exports = searchProducts;