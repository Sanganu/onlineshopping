const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes");

require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'))

//Production environment
if (process.env.NODE_ENV === 'production'){
	const path = require('path')
	console.log('Production environment')
	app.use('/static',express.static(path.join(_dirname,'../build/static')))
	app.get('/', (req, res) => {
	  res.sendFile(path.join(__dirname, '../build/'))
  })
}

app.use(routes);

// Start the API server 
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

});


