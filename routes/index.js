const express = require('express');
const router = express.Router();


const mu = require("../db/MongoUtils.js");

const buildQuery = query => ({
  name: new RegExp(`.*${query}.*`, "i")
});

// /* GET Search page. */
// router.get("/selectDB", (req, res) => {
//   const query = buildQuery(req.query.selectorDB);

//   console.log("QUERY",query);
//   mu.getDatabases()
//     .then(databaselisting =>
//       res.render('index', { title: 'The Mongo Explorer', DBs: databaselisting, DBSelected: req.query.selectorDB})
//       )
// });

//Data endpoint
router.get("/databases/:query", (req, res) => {
  console.log("params of req", req.params.query);
  const query = buildQuery(req.params.query);

  console.log("Built Query",query);
  
  mu.getCollections(req.params.query)
    .then(collectionListings => res.json(collectionListings));
});

//Data endpoint
router.get("/collections/:query", (req, res) => {
  console.log("params of req", req.params.query);
  splittedQuery = req.params.query.split("+");
  console.log("DBnames", splittedQuery[0]);
  console.log("Collection", splittedQuery[1]);
  const query = buildQuery(req.params.query);

  console.log("Built Query",query);
  
  mu.getDataCollection(splittedQuery[0], splittedQuery[1])
    .then(collectionDataListings => res.json(collectionDataListings));
});


/* GET home page. */
router.get('/', function(req, res, next) {

  mu.getDatabases()
    .then(databaselisting =>
      res.render('index', { title: 'The Mongo Explorer', DBs: databaselisting, DBSelected: "Select"})
      )
});


module.exports = router;
