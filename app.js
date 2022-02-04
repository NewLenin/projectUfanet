
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
app.set('port', process.env.PORT || 3001);
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'client/build')));

if (app.get('env') == 'development') {
  app.locals.pretty = true;
}

const fs = require('fs');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
const imageToBase64 = require('image-to-base64'); // запорос на модуль image-to-base64 "ИСПОЛЬЗОВАТЬ В CMD: npm i -S image-to-base64"

imageToBase64("1_9zs1vj4ouOR0OwORdwMfYQ.jpeg") //"имя файла"
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





 let data = '/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFR QBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIADgAOAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APsa2A/s+36scV4P460K00D4h35fEcWoqt6oLA7s5WQYI/vAn6NX0v4R8OtrQcynyrOE4Lep9B71F8VvgVo3xL0S0SNv7M1TT2MlrfRKM8jlH7shwCR6gHPUGMy/eU3Tj8R1ZRalWVWp8J8w+E/i1qfhnxbF4d8uXULLCi2c7n/dsOUYnnAPAz2xXrHj34L3PxMt7d4bpNISNxLG2SZAcdMY9a8z8F6RaeH/AIkKdYdYWiJQiQZJYAjr/nrX0yniG0gsFmQhoyDtK187g5OpSfO7+R9PjIxhVTpq3mcRFo+u2dvZWOs3CXv2dRGk6ZG/HQkHvgfrW3taOEJjbgfSsbxH4yjcLJGSGVgQT0/GrVrrtjqiboZjI/dcdD6V9RhMRGa5JPVHyOOw0qcueK0YiQ+W8hJBJHr0pdv0/Kp5JEiDBUBYjkmoPtB9Fr1LHk3R6zbTRabZx2sKgQrgKPX1J9zWd40e6m8PT/ZJ/IkVc/LkMeK53U9be2lgXzFjAyXB6/y5pjeKY9S0+RI2IflSrDk+9fK1Y+0hJN6s+spNU5RaWx8U/EGz8S6v4i/tC3ma3mV9iQqA24DuzHv/AJzWv+yZr/xK1rxD438L+NIJ203TQs1lfvEAgBbBjDAYIIww5yOa9Z1jw9K+qzPKfkz+7UHAXsSf8/lXYaVew2dhZaVC32WBmHygDzJPfHbv1rwMvhOMpRktD6PMKkJxjKL1POfFutppt79jjJdu/vU3hDWYrK9NyQBI/wB5cfzrlfjzpWpvfLLorwRyA4McyF1lXnjKkbT6Hke1P8FaPqNzHb26JJc3IRQzAclscnivVpRqe0Tijzq7pew957nvGnrN4jdFgTYhxuOK1f8AhCJv+ehq14ZYaFokMNwqxXBXk5rQ/ttf+eyf99D/ABr7aCvFXPzyfxOxw3inVyLLzM7X29Pf1rkPD3iRf7SARmMx4fecALW9eW8epxPDKXAPQjqDXhnj7xRqPgXU9kFobhc5WYNjv0NeHVwrhK62Pco4xTjyy3Pf9e2uV2gFmGQce1YLTwaMTOD51wUYtJ1wMdAfzFc74Q8cP4m8KWl1NiO5K5lRW3bG7jNcp4/+JumeD7UtezAM4ISMdXODgVgqcd0jt9tLZsv+KtYfUZWkm2qEc57DgD/69Zvhr4lW+iSSCzTzbhvlVgK8M1D4ta94k1maKxs1W1B3Fmbheec+vX9Ktw+Ik0aIHIM55Z/f2rpoR5Z3scmIqKcLJn1foniUTQ/btZvhBGFOUZ/6Vf8A+E68K/8AQSj/AO+x/jXxTq3jLVddXyUmlaPPTccH/GsrGperV66qHjOld6H3tZs80wK8AL2rkvHvhE69AcW5bBwD3rr9I6n/AHf61Pe/8ex/3quSTWpzKTT0Pme0stT8E6sZ7W1kuIxlZIV4DjHqeK4b4haVa+JNVgvtSdrCCCTzMM4Lvx90AE4+te3eIP8AXzfj/SvDviT/AKj8RXmewjKdz1ViJRp8pQLS6gPsukWv2PTwOJCOoP15NX7LwfbxqHuCZXHO5u5p3hj/AJBkX+6K6GT/AFNaN20Q1rqVdN0m1kkLLGFReAfWtT+yrX+5+tVtH/49j/v1o0XYz//Z';
//сам текст в base64
 let buff = new Buffer(data, 'base64');// кодировка
 fs.writeFileSync('image.png', buff);//создание и запись

 console.log('success');