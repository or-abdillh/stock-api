//Upload file API
var response = require('../../response/response.js')

const upload = (req, res) => {
   
   console.log(req)
   //If file not exist
   if (!req.files) {
      response.serverError('File not found', res);
    }
   // accessing the file
   const myFile = req.files.file;
   
    //  mv() method places the file inside public directory
    myFile.mv(`public/${myFile.name}`, err => {
        if (err) {
            console.log(err)
            response.serverError('Something wrong', res);
        }
        // returing the response with file path and name
        response.success({ path: `http://${req.hostname}:8080/public/${myFile.name}` }, res);
    });
}

module.exports = upload;