var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'sql6.freemysqlhosting.net',
  user: 'sql6450747',
  password: 'yRxmNywWbi',
  database: 'sql6450747',
  multipleStatements: true
});

conn.connect(err => {
  if (err) throw err;
  console.log('MySQL connected !!');
});

module.exports = conn;