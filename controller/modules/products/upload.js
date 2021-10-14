//Upload file API
var response = require('../../../response/response.js')

const upload = (req, res) => {
   
   //If file not exist
   if (!req.files) {
      response.serverError('File not found', res);
    }
   // accessing the file
   const myFile = req.files.file;
   
   //Get extension
   let ext = myFile.name.split('.');
   ext = ext[ext.length - 1];
   
   //Generate name file
   const nameFile = `product-${new Date().getTime()}.${ext}`;

   //  mv() method places the file inside public directory
   myFile.mv(`public/${nameFile}`, err => {
        if (err) {
            console.log(err)
            response.serverError('Something wrong', res);
        }
        // returing the response with file path and name
        response.success({ path: `http://${req.hostname}:8080/public/${nameFile}` }, res);
   });
}

module.exports = upload;