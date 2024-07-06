var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const mongoUri = 'mongodb://localhost:27017';

let client = new MongoClient(mongoUri);
let db = client['db'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.post('/add', function(req, res, next) {
  // connect to db
  db.insertOne(req.body, (err, result) => {
    if (err) {
      res.send('error');
    } else {
      res.send('success');
    }
  });
});

module.exports = router;
