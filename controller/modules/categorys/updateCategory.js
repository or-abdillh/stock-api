//Update category
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var tokenValidation = require('../../../utils/tokenValidation.js');

const updateCategory = (req, res) => {
   //Get data from body
   const category = req.body.category;
   const key = req.body.id_category;
   
   //Get token from headers
   const headers = { TOKEN: req.headers.token };
   
   //Create sql
   const sql = `UPDATE Categorys SET category = "${category}" WHERE id_category = "${key}"`;
   
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