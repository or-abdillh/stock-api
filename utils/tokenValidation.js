//TOKEN validation
const tokenValidation = (conn, body, callBack) => {
   //Query to DB
   const sql = `SELECT * FROM User WHERE token = "${body.TOKEN}"`;
   conn.query(sql, (err, rows, fields) => {
      if (err) throw err;
      //Validation actions
      if ( rows.length > 0 ) callBack(true); //Token valid
      else callBack(false); // Token invalid
   })
}

module.exports = tokenValidation;