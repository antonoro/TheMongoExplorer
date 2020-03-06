const express = require('express');
const router = express.Router();


const mu = require("../db/MongoUtils.js");

const buildQuery = query => ({
  name: new RegExp(`.*${query}.*`, "i")
});

router.get("/selectDB", (req, res) => {
  const query = buildQuery(req.query.selector);

  console.log(req.query);
  mu.getDatabases()
    .then(databaselisting =>
      res.render('index', { title: 'The Mongo Explorer', DBs: databaselisting, DBSelected: req.query.selectorDB})
      )
  

});

/* GET home page. */
router.get('/', function(req, res, next) {

  mu.getDatabases()
    .then(databaselisting =>
      res.render('index', { title: 'The Mongo Explorer', DBs: databaselisting, DBSelected: "Select..."})
      )
});


module.exports = router;
