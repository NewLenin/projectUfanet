
/**
 * Module dependencies.
 */
require('dotenv').config()
var express = require('express')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , methodOverride = require('method-override');

const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'client/build')));

if (app.get('env') == 'development') {
  app.locals.pretty = true;
}

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const start = async() =>{
  try{
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnfiedTopology: true
    })
    http.createServerapp.listen(app.get('port'), function(){
      console.log("Express server listening on port " + app.get('port'));
    });
  }catch(e){
    console.log(e);
  }
}



