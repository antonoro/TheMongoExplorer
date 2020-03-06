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


router.post("/document/:query", (req, res) => {
  console.log("add params", req.params.query);

  splittedQuery = req.params.query.split("+");
  console.log("DBnames", splittedQuery[0]);
  console.log("Collection", splittedQuery[1]);
  console.log("documentAddedName", splittedQuery[2]);
  console.log("documentAddedCountry", splittedQuery[3]);
  const DocumentAdded = {
    DocumentCountry: req.body.splittedQuery[3],
    DocumentName: req.body.splittedQuery[2]
  };
  mu.insert(DocumentAdded, splittedQuery[0], splittedQuery[1])
    .then(res.redirect("/"));
});

/* GET home page. */
router.get('/', function(req, res, next) {

  mu.getDatabases()
    .then(databaselisting =>
      res.render('index', { title: 'The Mongo Explorer', DBs: databaselisting, DBSelected: "Select"})
      )
});


module.exports = router;
