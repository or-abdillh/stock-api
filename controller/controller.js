 'use strict';

var response = require('../response/response.js');
//INDEX
const index = (req, res) => {
   response.success('API Sukses berjalan dengan baik', res)
}

//Modules
//Authentication
var auth = require('./modules/auth.js');
var token = require('./modules/token.js');

//Exports
module.exports = {
   index,
   auth,
   token
}