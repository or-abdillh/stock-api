'use strict';

module.exports = (app) => {
   
  var controller = require('../controller/controller.js');
  
  //CORS Handler
   app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
   });

   //INDEX
   app.route('/')
      .get(controller.index)
      
   //Authentication
   app.route('/auth').post(controller.auth);
   
   //Validation TOKEN
   app.route('/token').post(controller.token);
   
   //Logout handler
   app.route('/logout').post(controller.logout);
   
   //Get profile information
   app.route('/profile').post(controller.getProfile);
}