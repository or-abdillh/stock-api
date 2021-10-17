//change fullname
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
//import utils for TOKEN validation
var tokenValidation = require('../../../utils/tokenValidation.js');

const changeName = (req, res) => {
   //Create body and get data from req
   const body = { TOKEN: req.body.TOKEN };
   const newName = req.body.new_name;
   
   //Create sql
   const sql = `UPDATE User SET fullname = "${newName}" WHERE token = "${body.TOKEN}"`;
   
   const change = token => {
      //token valid
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else response.success('Success to change fullname', res);
         })
      } else response.forbidden('TOKEN Invalid !!', res);
   }
   
   tokenValidation(connection, body, change);
}

module.exports = changeName;