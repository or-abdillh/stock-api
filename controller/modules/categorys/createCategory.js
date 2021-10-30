//Create category into table Categorys
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var tokenValidation = require('../../../utils/tokenValidation.js');

const createCategory = (req, res) => {
   //Get TOKEN from headers
   const headers = { TOKEN : req.headers.token };
   console.log(req.headers);
   //Get data
   const category = req.body.category;
   const createAt = new Date().getTime();
   
   //Create SQL
   const sql = `INSERT INTO Categorys VALUES (${null}, "${category}", "${createAt}")`;
   
   const create = token => {
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else response.success("Create new category success", res);
         })
      } else response.forbidden('TOKEN invalid', res);
   }
   
   tokenValidation(connection, headers, create);
}

module.exports = createCategory;