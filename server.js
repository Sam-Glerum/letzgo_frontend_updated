const express = require('express');
const path = require('path');
const http = require('http');
const compression = require('compression');

const app = express();


//CORS headers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN || 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    res.status(200);
    res.end();
  } else {
    next();
  }
  //next();
});

// Compress static assets to enhance performance.
// Decrease the download size of your app through gzip compression:
app.use(compression());

//
// appname is the name of the "defaultProject" value that was set in the angular.json file.
// When built in production mode using 'ng build --prod', a ./dist/{appname} folder is
// created, containing the generated application. The appname points to that folder.
//
// Replace the name below to match your own "defaultProject" value!
//
const appname = 'letzgo';

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist', appname)));

// Catch all routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', appname, 'index.html'));
});


console.log("PORT: " + process.env.PORT);

// Get port from environment and store in Express.
app.set('port', process.env.PORT || 4200);
// Create HTTP server.
const server = http.createServer(app);
// Listen on provided port, on all network interfaces.
server.listen(app.get('port'), () => console.log(`Angular app \'${appname}\' running on port ` + app.get('port')));
