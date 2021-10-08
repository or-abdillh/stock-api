'use strict'

//Insert TOKEN to table User
//Save the time token has create
const saveToken = (conn, TOKEN, username) => {
   //Get the time
   const createAt = new Date().getTime();
   //Create query
   const sql = `UPDATE User SET token = "${TOKEN}", token_create_at = "${createAt}" 
      WHERE username = "${username}"`;
      
   conn.query(sql, (err, rows, fields) => {
      if (err) throw err;
      console.log('Update token successfull !!')
   })
}

module.exports = saveToken;