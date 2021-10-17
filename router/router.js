'use strict';

module.exports = (app) => {
   
  var controller = require('../controller/controller.js');

   //INDEX
   app.route('/').get(controller.index)
      
   //Authentication
   app.route('/auth').post(controller.auth);
   
   //Validation TOKEN
   app.route('/token').post(controller.token);
   
   //Logout handler
   app.route('/logout').get(controller.logout);
   
   //Get profile information
   app.route('/profile').post(controller.getProfile);
   
   //Get All Products
   app.route('/products').post(controller.getProducts);
   
   //Post image product
   app.route('/upload').post(controller.upload);  
   
   //Create new product
   app.route('/createProduct').post(controller.createProduct);
   
   //Remove file upload product
   app.route('/removeFile').post(controller.remove);
   
   //Delete product from table Products
   app.route('/deleteProduct').post(controller.deleteProduct);
   
   //Update product from table Products
   app.route('/updateProduct').post(controller.updateProduct);
   
   //Get all category from Categorys table
   app.route('/categorys').post(controller.getCategorys);
   
   //Create new category
   app.route('/createCategory').post(controller.createCategory);
   
   //Delete category from table
   app.route('/deleteCategory').post(controller.deleteCategory);
   
   //Set category product to uncategorys
   app.route('/setUncategorys').post(controller.setUncategorys);
   
   //Update category
   app.route('/updateCategory').post(controller.updateCategory);
   
   //Search products by name_product and category_product
   app.route('/search').post(controller.searchProducts);
   
   //Change fullname
   app.route('/changeName').post(controller.changeName);
   
   //change password
   app.route('/changePassword').post(controller.changePassword);
}