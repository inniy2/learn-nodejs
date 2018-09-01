var url = 'http://mylogger.io/log';

function log(message){
  // Send an HTTP request
  console.log(message);
}

// These will make local var and function to global module
// module.exports.log = log;
// module.exports.endPoint  = url;

// You can also export a single function
module.exports = log;
