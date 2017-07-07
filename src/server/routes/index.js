var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('Request GOT!');
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

module.exports = router;
