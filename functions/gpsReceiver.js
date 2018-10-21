'use strict';

const AWS = require('aws-sdk');

// Dummy endpoint for Flaviu to post to 
module.exports = (event, context, callback) => {
  console.log(JSON.stringify(event));

  context.succeed({
    statusCode: 200,
    body: JSON.stringify({'message': 'POST success'}),
  });
};
