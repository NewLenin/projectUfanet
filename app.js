
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser')
  , path = require('path')
  , fileUpload = require('express-fileupload')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , methodOverride = require('method-override');

const { token } = require('morgan');
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")
const mongoose = require("mongoose");
const config = require("config");
var cors = require('cors')

var app = express();
var jsonParser = bodyParser.json();
var productsRouter = express.Router();
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)
var a = 0;
var jsonParser = bodyParser.json();
var productsRouter = express.Router();
app.use(cors())
app.use(fileUpload({}));



const PORT = config.get('serverPort')

const start = async () => {

  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => {

      console.log('start', PORT);
    });
  }
  catch (e) {

  }
}
start()


app.set('port', process.env.PORT || 3000);
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'client/build')));

if (app.get('env') == 'development') {
  app.locals.pretty = true;
}

const fs = require('fs');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});