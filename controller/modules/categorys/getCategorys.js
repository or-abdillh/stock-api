//API get all category from table Categorys
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var tokenValidation = require('../../../utils/tokenValidation.js');

const getCategorys = (req, res) => {
   //Get TOKEN
   const body = { TOKEN : req.body.TOKEN };
   
   //Create SQL
   const sql = 'SELECT * FROM Categorys';
   
   const categorys = token => {
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else {
               if (rows.length === 0) response.success('Empty record given', res);
               else response.success(rows, res);
            }
         })
      } else response.forbidden('TOKEN invalid', res);
   }
   
   tokenValidation(connection, body, categorys);
}

module.exports = getCategorys;