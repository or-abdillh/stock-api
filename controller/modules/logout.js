var connection = require('../../connection/conn.js');
var response = require('../../response/response.js');

//Logout handler
const logout = (req, res) => {
   //Get data from body
   //const TOKEN = req.body.TOKEN;
   
   //Clear Cookie TOKEN
   res.clearCookie('TOKEN');
   console.log('Cookie success to remove !!');
   response.success('Logout success', res);
}

module.exports = logout;