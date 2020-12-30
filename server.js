const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const app = express();
const PORT = process.env.PORT || 8080;

require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'))

const db = require("./models")
const routes = require("./routes");

//Production environment
// Serve up static assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }
  
  
app.use(routes);

// Start the API server 
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

});


