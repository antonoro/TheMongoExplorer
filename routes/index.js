const express = require('express');
const router = express.Router();


const mu = require("../db/MongoUtils.js");

const buildQuery = query => ({
  name: new RegExp(`.*${query}.*`, "i")
});

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


router.get("/document/add/:query", (req, res) => {
  console.log("add params", req.params.query);

  splittedQuery = req.params.query.split("+");
  console.log("DBnames", splittedQuery[0]);
  console.log("Collection", splittedQuery[1]);
  console.log("documentAddedName", splittedQuery[2]);
  console.log("documentAddedCountry", splittedQuery[3]);
  const DocumenttoAdd = {
    country: splittedQuery[3],
    name: splittedQuery[2],
    timestamp: new Date()
  };
  console.log("The document", DocumenttoAdd);
  mu.insert(DocumenttoAdd, splittedQuery[0], splittedQuery[1])
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
