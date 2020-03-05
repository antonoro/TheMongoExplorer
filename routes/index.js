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

  mu.findDep(query).then(datalisting => res.render("index", {datalistings: datalisting}));

});

/* GET home page. */
router.get('/', function(req, res, next) {

  mu.getDatabases()
    .then(databaselisting =>
      res.render('index', { title: 'The Mongo Explorer', DBs: databaselisting})
      )
});


module.exports = router;
