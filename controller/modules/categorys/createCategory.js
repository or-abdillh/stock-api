//API get all category from table Categorys
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var tokenValidation = require('../../../utils/tokenValidation.js');

const createCategory = (req, res) => {
   //Get TOKEN
   const body = { TOKEN : req.body.TOKEN };
   
   //Get data
   const theName = req.body.category
   const createAt = new Date().getTime()
   
   //Create SQL
   const sql = `INSERT INTO Categorys VALUES (${null}, "${theName}", "${createAt}")`;
   
   const create = token => {
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else response.success("Create new category success", res);
         })
      } else response.forbidden('TOKEN invalid', res);
   }
   
   tokenValidation(connection, body, create);
}

module.exports = createCategory;