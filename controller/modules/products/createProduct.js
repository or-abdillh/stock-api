var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');

//import utils for TOKEN validation
var tokenValidation = require('../../../utils/tokenValidation.js');

//Create new product 
const createProduct = (req, res) => {
   //Get token from headers
   const headers = {
      TOKEN: req.headers.token
   }
   console.log(headers)
   // get field table
   const product = {
      name_product: req.body.name_product,
      price_product: req.body.price_product,
      stock_product: req.body.stock_product,
      image_product: req.body.image_product,
      category_product: req.body.category_product,
      last_modified: new Date().getTime(),
      stock_unit: req.body.stock_unit
   }
   
   //Create method for query
   const queryCreateProduct = token => {
      //Query SQL
      const sql = `INSERT INTO Products VALUES(${null}, "${product.name_product}", 
         "${product.price_product}", "${product.stock_product}","${product.image_product}",
         "${product.category_product}", "${product.last_modified}", "${product.stock_unit}")`;
      
      //Validation
      if ( token ) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            //Make response
            response.success('Success create new product', res);
         })
      } else {
         response.forbidden('Token invalid', res);
      }
   }
   
   //call tokenValidation()
   tokenValidation(connection, headers, queryCreateProduct);
}

module.exports = createProduct;