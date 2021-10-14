var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');
var randomToken = require('random-token').create('gGlLopPxZnoMpYyAaDeE1390&_');

//Logout handler
const logout = (req, res) => {
   //Client remove token in local stroage
   //Server generate new token again to save to table
   const NEW_TOKEN = randomToken(50);
   // create query
   const sql = `UPDATE User SET token = "${NEW_TOKEN}", token_create_at = "${ new Date().getTime() }"`;
   connection.query(sql, (err, rows, fields) => {
      if (err) response.serverError(err, res);
      else {
         if ( rows.affectedRows > 0 ) response.success('TOKEN remove', res)
         else response.serverError('TOKEN failed to remove, please check into table manually', res);
      }
   })
}

module.exports = logout;