const MongoClient = require("mongodb").MongoClient;


function MongoUtils(){


    const mu = {},
        
    url = "mongodb://localhost:27017"; 

    mu.connect = () => {
        client = new MongoClient(url, {useUnifiedTopology: true});
        return client.connect();
    }

    mu.getDatabases = () => mu.connect().then(client =>
            client
            .db()
            .admin()
            .listDatabases()
        ).then(dbases => {
            const DBs = dbases.databases;
            console.log("Databases in MongoDB", DBs);
            console.log("Number of db", DBs.length);
            client.close();
            return DBs;
        });

    mu.getCollections = (dbName) => mu.connect().then(client => (

        client.db(dbName)
            .listCollections()
            .toArray()
        ).then(collectionsDB => {
        console.log("Collections given", collectionsDB);
        client.close();
        return collectionsDB;
    }));

    mu.getDataCollection = (dbName, collName) => mu.connect().then(client => (

        client.db(dbName)
            .collection(collName)
            .find({})
            .toArray()
            )   
            .then(dataCollection => {
                console.log("Data given", dataCollection);
                client.close();
                return dataCollection;
            })
        );
    
    mu.insert = (document, dbName, collName) => mu.connect().then(client => 
        {
            const selectedCol = client.db(dbName).collection(collName);
            return selectedCol
                .insertOne(document)
                .finally(() => client.close());
        });

    return mu;

}

module.exports = MongoUtils();