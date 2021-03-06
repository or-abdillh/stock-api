//Get peoducts by name_product and category product

var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');

//import utils for TOKEN validation
var tokenValidation = require('../../../utils/tokenValidation.js');

const searchProducts = (req, res) => {
   //Get TOKEN from headers
   const headers = { TOKEN: req.headers.token };
   
   //Get keyword and category product from params
   const keyword = req.params.keyword;
   const category_product = req.params.category;
   
   //Create SQL 
   let sql = `SELECT * FROM Products `;
   if ( keyword === 'false' && category_product !== 'All') {
      sql += ` WHERE category_product = "${category_product}"`
   } 
   else if ( keyword !== 'false' && category_product !== 'All' ) {
      sql += ` WHERE name_product LIKE "%${keyword}%" AND category_product = "${category_product}"`
   }
   else if ( keyword !== 'false' && category_product === 'All') {
      sql += ` WHERE name_product LIKE "%${keyword}%"`
   }
   
   const search = token => {
      //console.log(sql)
      //Token valid 
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else response.success(rows, res);
         })
      } else response.forbidden('TOKEN invalid', res);
   }
   
   tokenValidation(connection, headers, search);
}

module.exports = searchProducts;