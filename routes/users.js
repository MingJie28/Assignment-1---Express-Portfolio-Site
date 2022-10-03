/*user.js, Ming Jie Wang, 301188372, Oct.2,2022*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
