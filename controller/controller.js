 'use strict';

const response = require('../response/response.js');
//INDEX
const index = (req, res) => {
   response.success('API Sukses berjalan dengan baik', res)
}

//Modules
//Authentication
const auth = require('./modules/user/auth.js');

//Validation TOKEN
const token = require('./modules/user/token.js');

//Logout handler
const logout = require('./modules/user/logout.js');

//Get profile
const getProfile = require('./modules/user/getProfile.js');

//Get all products
const getProducts = require('./modules/products/getProducts.js');

//Upload API
const upload = require('./modules/products/upload.js');

//Create new product
const createProduct = require('./modules/products/createProduct.js');

//Remove File upload product
const remove = require('./modules/products/removeFile.js');

//Delete product from table
const deleteProduct = require('./modules/products/deleteProduct.js');

//Update product from table
const updateProduct = require('./modules/products/updateProduct.js');

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
   deleteProduct,
   updateProduct
}