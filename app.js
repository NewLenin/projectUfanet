
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , methodOverride = require('method-override');
const { token } = require('morgan');

var app = express();
var a = 0;
app.set('port', process.env.PORT || 3000);
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'client/build')));

if (app.get('env') == 'development') {
  app.locals.pretty = true;
}


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
const imageToBase64 = require('image-to-base64'); // запорос на модуль image-to-base64 "ИСПОЛЬЗОВАТЬ В CMD: npm i -S image-to-base64"

imageToBase64("003cdb552a234eea78c38ce18d22cb1f.jpeg") //"имя файла"
.then(
    (response) => {
      var logger = fs.createWriteStream('log.txt', { //создание лога
        flags: 'a' 
      })
      logger.write(response); // запись в log.txt
console.log(response); // вывод в консоли
    }
)
.catch(
    (error) => {
        console.log(error); 
    }
);