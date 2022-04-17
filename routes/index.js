var express = require('express');
var router = express.Router();

//sample messages
const messages = [
  {
    text:"Hi Baltej",
    user:"layla",
    added: new Date(),
  },
  {
    text:"Hi there big titty",
    user: "baltej",
    added: new Date(),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'Mini Messageboard', messages: messages });
});

module.exports = router;
