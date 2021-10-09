'use strict';

const setData = (status, message, values) => {
   return {
    'status': status,
    'message': message,
    'results': values  
   }
} 

const setResponse = (data, res) => {
   res.status(200);
   res.json(data);
   res.end();
}

//Response success
const success = (values, res) => {
  setResponse(setData(200, 'success' ,values), res);
}

//Internal server error
const serverError = (values, res) => {
   setResponse(setData(501, 'Internal Server error', values), res);
}

//Response forbidden
const forbidden = (values, res) => {
   setResponse(setData(403, 'Forbidden', values), res);
}

//Export
module.exports = {
   success,
   forbidden,
   serverError
}