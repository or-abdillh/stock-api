//API for delete record from table product
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var tokenValidation = require('../../../utils/tokenValidation.js');
var fs = require('fs');

//Remove file
const removeFile = file => {
   //remove file from public folder
   fs.unlink(`public/${file}`, err => {
      if (err) throw err;
      console.log(`${file} success to remove from server`)
   })
}

//Delete product
const deleteProduct = (req, res) => {
   //Get primary key, TOKEN, and name file
   const body = { TOKEN: req.body.TOKEN };
   const key = req.body.id_product;
   const path = req.body.image_product;
   
   //Create name file
   //http://localhost:8080/public/product-1634004243760.png
   let file = path.split('/');
   file = file[file.length - 1];
   
   //Create sql 
   const sql = `DELETE FROM Products WHERE id_product = "${key}"`;
   
   const del = token => {
      if (token) {
         //Query to DB
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else {
               if (rows.affectedRows > 0) {
                  response.success('Product success to delete from table Products', res);
                  //Remove file
                  removeFile(file);
               } else response.serverError('Empty record', res);
            }
         })
      } else response.forbidden('TOKEN invalid', res);
   }
   
   tokenValidation(connection, body, del);
}

module.exports = deleteProduct;