var express = require('express');
var router = express.Router();
const fs = require('fs')
/* GET home page. */
router.get('/', function (req, res, next) {

  res.send('hello world')
});

router.get('/:page', function (req, res, next) {
  var data = fs.readFileSync(`./data/word${req.params.page}.json`)
  var words = JSON.parse(data)
  res.send(words)
});

module.exports = router;