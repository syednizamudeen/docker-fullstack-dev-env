'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

var mongoose = require('mongoose');
// mongoose.connect('mongodb://user:password@sample.com:port/dbname', { useNewUrlParser: true });
mongoose.connect('mongodb://mongo:27017', { useNewUrlParser: true, useUnifiedTopology: true });
console.log(mongoose);