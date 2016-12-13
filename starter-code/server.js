// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
//
app.get('/', function (request, response) {
  response.sendFile('views/index.html' , { root : __dirname});

});

//NUMBER GUESS
var numberGuess = 4
app.get('/pick-a-number', function (request, response) {
  var num = Number(request.query.number);
  if(num === numberGuess) {
    response.send('YOU GUESSED IT!');
  } else if (num > numberGuess) {
    response.send('Too high, guess again!');
  } else if (num < numberGuess) {
    response.send('Too low, guess again!');
  } else {
    response.send('wtf is that?!');
  }
});

//PUSH NUMBER
app.post('/pick-a-number', function (request, response) {
    numberguess = Number(request.body.number);
    response.status(200).send('Number updated successfully!');
  });




// Gallery View Route


// The Number Guessing Game


// Gallery


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
