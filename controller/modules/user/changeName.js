//change fullname
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
//import utils for TOKEN validation
var tokenValidation = require('../../../utils/tokenValidation.js');

const changeName = (req, res) => {
   //Get data from req
   const newName = req.body.new_name;
   
   //Get TOKEN from headers
   const headers = { TOKEN: req.headers.token };
   
   //Create sql
   const sql = `UPDATE User SET fullname = "${newName}" WHERE token = "${headers.TOKEN}"`;
   
   const change = token => {
      //token valid
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else response.success('Success to change fullname', res);
         })
      } else response.forbidden('TOKEN Invalid !!', res);
   }
   
   tokenValidation(connection, headers, change);
}

module.exports = changeName;