const MongoClient = require("mongodb").MongoClient();

const url = "";

const client = new MongoClient(url, {useUnifiedTopology: true});