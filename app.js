const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=bizdojo%20takapuna%20auckland',
  json: true
}, (error, response, body) =>{
  console.log(body);
});
