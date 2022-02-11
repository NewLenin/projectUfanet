
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



const authRouter = require('./authRouter.js');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { nextTick } = require('process');
var app = express();

app.use(express.json());
app.use("/auth", authRouter);

mongoose.connect('mongodb+srv://lil_ilich:05032003@cluster0.kntps.mongodb.net/Authorization?retryWrites=true&w=majority');

const posts =[
  {
    username: 'beba',
    title: 'Post 1'
  },
  {
    username: 'aaaa',
    title: 'Post 2'
  }
];


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
app.get('/posts',authToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
});


app.post('/reg', (req, res)=>{
  const username = req;
  console.log(username);
})


app.post('/login', (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken});
  console.log(req);
})


function authToken(req, res, next) {
  const authHeader = req.headers['auth'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return console.log(token);
    req.user = user;
    next();
  })
  
}


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});




http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});