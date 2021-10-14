//Delete category from table Categorys
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var tokenValidation = require('../../../utils/tokenValidation.js');

const deleteCategory = (req, res) => {
   //Get TOKEN
   const body = { TOKEN : req.body.TOKEN };
   
   //Get data
   const id_category = req.body.id_category
   
   //Create SQL
   const sql = `DELETE FROM Categorys WHERE id_category = ${id_category}`;
   
   const del = token => {
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else {
               if ( rows.affectedRows > 0 ) response.success("The category success to delete from table", res);
               else response.success("Empty record", res);
            }
         })
      } else response.forbidden('TOKEN invalid', res);
   }
   
   tokenValidation(connection, body, del);
}

module.exports = deleteCategory;