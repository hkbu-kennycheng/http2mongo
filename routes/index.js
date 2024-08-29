var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb')
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';

let client = new MongoClient(mongoUri);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.post('/:collection', async function(req, res, next) {
  // insert to db
  try {
    let result = await client.db('db').collection(req.params.collection).insertOne(req.body);
    return res.json(result);
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
