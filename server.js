const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();

app.use(bodyParser.json());

var db;

mongodb.MongoClient.connect('mongodb://localhost:27017', (err, client) => {

  if(err){
    console.log(err);
    process.exit(1);
  }

  db = client.db();

  console.log('db connected');

  const server = app.listen(8089, () => {
    var port = server.address().port;
  
    console.log('running on ', port);
  });

});


app.get('/api/contacts', (req, res) => {

});