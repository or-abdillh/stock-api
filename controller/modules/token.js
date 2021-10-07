var connection = require('../../connection/conn.js');
var response = require('../../response/response.js');

//Token validation
const token = (req, res) => {
   //Get data from body
   const TOKEN = req.body.TOKEN;
   const username = req.body.username;
   
   //Query to DB
   const sql = `SELECT * FROM User WHERE username = "${username}" AND token = "${TOKEN}"`;
   connection.query(sql, (err, rows, fields) => {
      if (err) response.serverError('MySql Error', res);
      
      //validation action
      if ( rows.length > 0 ) {
         response.success('TOKEN valid', res);
      } else {
         response.authInvalid('TOKEN invalid', res);
      }   
   })
}

module.exports = token;