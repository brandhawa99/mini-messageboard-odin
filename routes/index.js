var express = require('express');
var router = express.Router();

//sample messages
const messages = [
  {
    text:"Hi other dude person",
    user:"dude person",
    added: new Date(),
  },
  {
    text:"Hey dude",
    user: "other dude person",
    added: new Date(),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'Mini Messageboard', messages: messages });
});

router.get('/new',(req,res,next)=>{
  res.render('form');
})
router.post('/new',(req,res,next)=>{
  let user = req.body.user;
  let message = req.body.text;
  messages.push({
    text :message,
    user :user,
    added: new Date(),
  })
  console.log(req.body.user)
  res.redirect('/');
})


module.exports = router;
