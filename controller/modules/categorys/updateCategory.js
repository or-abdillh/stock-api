//Update category
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var tokenValidation = require('../../../utils/tokenValidation.js');

const updateCategory = (req, res) => {
   //Get data from body
   const category = req.body.category;
   const key = req.body.id_category;
   const oldCategory = req.body.oldCategory;
   
   //Get token from headers
   const headers = { TOKEN: req.headers.token };
   
   //Create sql
   //After Update then UPDATE teh products use the old Category to new Category
   const sql = `UPDATE Categorys SET category = "${category}" WHERE id_category = "${key}"; 
      UPDATE Products SET category_product = "${category}" WHERE category_product = "${oldCategory}"`
   
   const update = token => {
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else response.success('Success to update category', res);
         })
      } else response.forbidden('TOKEN invalid', res);
   }
   
   tokenValidation(connection, headers, update);
}

module.exports = updateCategory;