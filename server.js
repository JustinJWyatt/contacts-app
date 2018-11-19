const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

var db;

mongodb.MongoClient.connect('mongodb://localhost:27017', (err, client) => {

  if(err){
    console.log(err);
    process.exit(1);
  }

  db = client.db('test');

  console.log('db connected');

  const server = app.listen(8089, () => {
    var port = server.address().port;
  
    console.log('running on ', port);
  });

});


app.get('/api/contacts', (req, res) => {

  db.collection('contacts').find().toArray((err, docs) => {
    res.status(200).json(docs);
  });

});

app.post('/api/contacts', (req, res) => {

})