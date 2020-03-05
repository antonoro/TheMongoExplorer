var express = require('express');
var router = express.Router();
var passport = require('passport');

const mu = require("../db/MongoUtils.js");

const buildQuery = query => ({
  name: new RegExp(`.*${query}.*`, "i")
});

router.get("/selectSS", (req, res) => {
  const query = buildQuery(req.query.selector);

  console.log(req.query);

  mu.find(query).then(datalisting => res.render("index", {datalisting}));

});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

/*Authenticate */
router.get('/login', (req, res) =>{
  res.render('index', { title: 'Authentication: Pending' })
}
);

router.post('/login', 
passport.authenticate('local', 
{
  failureRedirect: '/login',
  successRedirect: '/home/?valid=true&status=passed'
})
);




/*Home Logged in*/
router.get('/home', (req, res) =>{
  var passedVar = req.query;
  console.log(passedVar);
  if(passedVar.valid === 'true')
  {
    res.render('home',{ title: 'Authentication: Success' })
  }
  else{
    console.log('fail');
    res.redirect('/login');
  }
}
);

router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;
