const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session  = require('express-session');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!


const app = express();

// Logging middleware
app.use(morgan('dev'));

// Parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Session middleware
app.use(session({
  secret: 'A placeholder secret',
  resave: false,
  saveUninitialized: false
}))

// Static-asset serving middleware
app.use(express.static(path.join(__dirname, '../public')));



// Api routes
app.use('/api', require('./api'));


// All other routes send index.html (since it's a SPA)
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../index.html'))
})


// Error catcher
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})


app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
})