//change password
var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var md5 = require('md5');

//import utils for TOKEN validation
var tokenValidation = require('../../../utils/tokenValidation.js');

const changePassword = (req, res) => {
   //Get data from body
   const newPassword = md5(req.body.new_password);
   
   //Get token from headers
   const headers = { TOKEN: req.headers.token };
   
   //Create sql 
   const sql = `UPDATE User SET password = "${newPassword}" WHERE token = "${headers.TOKEN}"`;
   
   const change = token => {
      //token valid
      if (token) {
         connection.query(sql, (err, rows, fields) => {
            if (err) response.serverError(err, res);
            else response.success('Success to change password', res);
         })
      } else response.forbidden('TOKEN invalid', res);
   }
   
   tokenValidation(connection, headers, change);
}

module.exports = changePassword;