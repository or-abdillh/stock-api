 'use strict';

const response = require('../response/response.js');
//INDEX
const index = (req, res) => {
   response.success('API Sukses berjalan dengan baik', res)
}

//Modules
//Authentication
const auth = require('./modules/auth.js');

//Validation TOKEN
const token = require('./modules/token.js');

//Logout handler
const logout = require('./modules/logout.js');

//Exports
module.exports = {
   index,
   auth,
   token,
   logout
}