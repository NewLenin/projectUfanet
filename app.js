
/**
 * Module dependencies.
 */
// const express = require("express");
const helmet = require("helmet");

// const app = express();

// app.use(helmet());


const PORT = process.env.PORT || 4000

const express = require('express')
const app = express();
const mongoose=require('mongoose')
const authRouter = require('./authRouter');
  
app.use(express.json())


app.use("/auth",authRouter)

 mongoose.connect('mongodb+srv://lil_ilich:05032003@cluster0.kntps.mongodb.net/Users?retryWrites=true&w=majority')

  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , methodOverride = require('method-override');
 





app.set('port', process.env.PORT || 4000);
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'client/build')));


if (app.get('env') == 'development') {
  app.locals.pretty = true;
}


// app.get('/posts',authToken, (req, res) => {
//   res.json(posts.filter(post => post.username === req.user.name));
// });


// app.post('/login', (req, res) => {
//   const username = req.body.username;
//   const user = { name: username };

//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   res.json({ accessToken: accessToken});
//   console.log(req);
// })


// function authToken(req, res, next) {
//   const authHeader = req.headers['auth'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return console.log(token);
//     req.user = user;
//     next();
//   })
  
// }















// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

