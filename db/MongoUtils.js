const MongoClient = require("mongodb").MongoClient;


function MongoUtils(){


    const mu = {},
        
        url = "mongodb://localhost:27017";
        dbName = "DataDepartamentosCiudades", 
        colNameDepartamentos = "departamentos";
        colNameCiudades = "ciudades"

    mu.connect = () => {
        client = new MongoClient(url, {useUnifiedTopology: true});
        return client.connect();
    }

    mu.getDatabases = () => mu.connect().then(client =>
            client
            .db()
            .admin()
            .listDatabases({nameonly:true})
        ).then(dbases => {
            console.log("Databases in MongoDB", dbases.databases[0]);
            client.close();
            return dbases.name;
        });


    mu.findDep = query => mu.connect().then(client => 
        {
            const departamentosCol = client.db(dbName).collection(colNameDepartamentos);
            return departamentosCol
                .find(query)
                .sort({name: +1})
                .toArray()
                .finally(() => client.close());
        });

    mu.findCiud = query => mu.connect().then(client => 
        {
            const ciudadesCol = client.db(dbName).collection(colNameCiudades);
            return ciudadesCol
                .find(query)
                .sort({name: +1})
                .toArray()
                .finally(() => client.close());
        });

    mu.insertDep = departamento => mu.connect().then(client => 
        {
            const departamentosCol = client.db(dbName).collection(colNameDepartamentos);
            return departamentosCol
                .insertOne(departamento)
                .finally(() => client.close());
        });

    mu.insertCiudad = ciudad => mu.connect().then(client => 
        {
            const ciudadesCol = client.db(dbName).collection(colNameCiudades);
            return ciudadesCol
                .insertOne(ciudad)
                .finally(() => client.close());
        });

    mu.searchDep = query => mu.connect().then(client =>
        {
            const departamentosCol = client.db(dbName).collection(colNameDepartamentos);
            return  departamentosCol.find({name: query}).toArray();
        
        });
    
    mu.searchCiud = query => mu.connect().then(client =>
        {
            const ciudadesCol = client.db(dbName).collection(colNameCiudades);
            return  ciudadesCol.find({name: query}).toArray();
        
        });

    return mu;

}

module.exports = MongoUtils();