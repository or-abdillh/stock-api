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

//Get profile
const getProfile = require('./modules/getProfile.js');

//Get all products
const getProducts = require('./modules/getProducts.js');

//Upload API
const upload = require('./modules/upload.js');

//Create new product
const createProduct = require('./modules/createProduct.js');

//Remove File upload product
const remove = require('./modules/removeImage.js');

//Delete product from table
const deleteProduct = require('./modules/deleteProduct.js');

//Exports
module.exports = {
   index,
   auth,
   token,
   logout,
   getProfile,
   getProducts,
   upload,
   createProduct,
   remove,
   deleteProduct
}