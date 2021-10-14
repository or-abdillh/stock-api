//Remove image product

var fs = require('fs');
var tokenValidation = require('../../../utils/tokenValidation.js');
var response = require('../../../response/response.js');
var connection = require('../../../connection/conn.js');

const remove = (req, res) => {
   //Get name file
   const path = req.body.image_product;
   const body = { TOKEN: req.body.TOKEN };
   
   //Create name file
   //http://localhost:8080/public/product-1634004243760.png
   let file = path.split('/');
   file = file[file.length - 1];
   
   const removeFile = token => {
      if (token) {
         fs.unlink(`public/${file}`, err => {
            if (err) response.serverError(err, res)
            response.success('File success to remove from server', res)
         })
      } else response.forbidden('TOKEN invalid', res);
   }
   
   tokenValidation(connection, body, removeFile)
}

module.exports = remove;