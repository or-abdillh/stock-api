//Set product category to uncategorys if the category has remove
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var tokenValidation = require('../../../utils/tokenValidation.js');

const setUncategorys = (req, res) => {
   //Get token from headers
   const headers = { TOKEN: req.headers.token };
   
   //Get data from body
   const category = req.body.category;
   
   // create sql
   const sql = `UPDATE Products SET category_product = "uncategorys" WHERE category_product = "${category}"`;
   
   const uncategorys = token => {
      //
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else response.success('Success to set category_product to uncategorys', res);
         })
      } else response.forbidden('TOKEN Invalid', res);
   }
   
   tokenValidation(connection, headers, uncategorys)
}

module.exports = setUncategorys