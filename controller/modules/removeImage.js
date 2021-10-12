//Remove image product

var fs = require('fs');
var tokenValidation = require('../../utils/tokenValidation.js');
var response = require('../../response/response.js');
var connection = require('../../connection/conn.js');

const remove = (req, res) => {
   //Get name file
   const image = req.body.image;
   const body = { TOKEN: req.body.TOKEN };
   
   const removeFile = token => {
      if (token) {
         fs.unlink(`public/${image}`, err => {
            if (err) response.serverError(err, res)
            response.success('File success to remove from server', res)
         })
      } else response.forbidden('TOKEN invalid');
   }
   
   tokenValidation(connection, body, removeFile)
}

module.exports = remove;