var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb')
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';

let client = new MongoClient(mongoUri);
let db = client.db('db').collection('sensordata');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.post('/add', async function(req, res, next) {
  // insert to db
  let result = await db.insertOne(req.body);
  return res.json(result);
});

module.exports = router;
