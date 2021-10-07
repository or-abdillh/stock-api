//TOKEN validation
const tokenValidation = (conn, TOKEN, username) => {
   //Query to DB
   const sql = `SELECT * FROM User WHERE username = "${username}" AND token = "${TOKEN}"`;
   conn.query(sql, (err, rows, fields) => {
      if (err) throw err;
      
      //Validation actions
      if ( rows.length > 0 ) return true;
      else return false;
   })
}

module.exports = tokenValidation;