// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


// ROUTES
// Root Route
//
app.get('/', function (request, response) {
  response.sendFile('views/index.html' , { root : __dirname});

});

app.get('/art-gallery', function (request, response) {
  response.sendFile('views/art-gallery.html' , { root : __dirname});
});

// The Number Guessing Game
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

//Change Target Number
app.post('/pick-a-number', function (request, response) {
    numberGuess = Number(request.body.number);
    response.status(200).send('Number updated successfully!');
  });




// Gallery
app.get("/artworks",function(request, response) {
  response.json(artWorks);
});

app.post('/artworks', function(request, response){
  var newArtwork = {
    name: request.body.title,
    description: request.body.description,
    artist: request.body.artist
  };
  artworks.push(newArtwork);
  response.json(artworks);
});


var artWorks = [
  ["Title"],
  ["Description"],
  ["Artist"],
];


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
