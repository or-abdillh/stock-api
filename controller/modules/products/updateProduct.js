//Update product
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var tokenValidation = require('../../../utils/tokenValidation.js');

const updateProduct = (req, res) => {
   //Get data from body
   const id_product = req.body.id_product;
   const name_product = req.body.name_product;
   const price_product = req.body.price_product;
   const stock_product = req.body.stock_product;
   const image_product = req.body.image_product;
   const category_product = req.body.category_product;
   const stock_unit = req.body.stock_unit;
   const last_modified = new Date().getTime();
   
   //Get Token from headers
   const TOKEN = req.headers.token;
   
   //Create sql
   const sql = `UPDATE Products SET name_product = "${name_product}",
      price_product = "${price_product}", stock_product = "${stock_product}",
      image_product= "${image_product}", category_product = "${category_product}",
      stock_unit = "${stock_unit}", last_modified = "${last_modified}" 
      WHERE id_product = "${id_product}"`;
      
   const update = token => {
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else {
               if (rows.affectedRows > 0) response.success('Update product success', res);
               else response.success('Empty record selected', res);
            }
         })
      }
   }
   
   tokenValidation(connection, { TOKEN }, update);
}

module.exports = updateProduct