'use strict'

//Insert TOKEN to table User
const saveToken = (conn, TOKEN, username) => {
   const sql = `UPDATE User SET token = "${TOKEN}" 
      WHERE username = "${username}"`;
      
   conn.query(sql, (err, rows, fields) => {
      if (err) throw err;
      console.log('Update token successfull !!')
   })
}

module.exports = saveToken;