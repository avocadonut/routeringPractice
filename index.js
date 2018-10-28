const express = require("express");
const app = express();
const indexRouter = require ('./server/routers/indexRouter');
const page1Router = require ('./server/routers/page2Router');
const page3Router = require ('./server/routers/page3Router');

const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/page2', page1Router);
app.use('/page3', page3Router);


app.listen(port, (err) => {
    if(err) { return console.error(err); }
    console.log(`Listening to ${port}...`);
  });