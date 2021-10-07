'use strict';

const setData = (status, message, values) => {
   return {
    'status': status,
    'message': message,
    'results': values  
   }
} 

const setResponse = (data, res) => {
   res.set({
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      "Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTION"
      })
   res.status(data.status);
   res.json(data);
   res.end();
}

//Response success
const success = (values, res) => {
  setResponse(setData(200, 'success' ,values), res);
}

//Authentication is success
const authSuccess = (values, res) => {
   setResponse(setData(200, 'Auth Success', values), res)
}

//Authentication invalid
const authInvalid = (values, res) => {
   setResponse(setData(403, 'Forbidden', values), res);
}

//Export
module.exports = {
   success,
   authSuccess,
   authInvalid
}