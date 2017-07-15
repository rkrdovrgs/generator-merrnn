// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var api = require('./api');
var seed = require('./db/seed');

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// -------------------------------------------------
// Configure all routes inside api folder
api.configureRoutes(app);

// Main "/" Route. This will redirect the user to our rendered React application
app.use(function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Syncronyze database
seed.sync();

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
