var connection = require('../../../connection/conn.js');
var response = require('../../../response/response.js');

//Token validation
const token = (req, res) => {
   //Get data from body
   const TOKEN = req.body.TOKEN;
   
   //Query to DB
   const sql = `SELECT * FROM User WHERE token = "${TOKEN}"`;
   connection.query(sql, (err, rows, fields) => {
      if (err) response.serverError('MySql Error', res);
      else {
         //validation action
         if ( rows.length > 0 ) {
            console.log('TOKEN valid')
            response.success('TOKEN valid', res);
         } else {
            response.forbidden('TOKEN invalid', res);
         }
      }
   })
}

module.exports = token;