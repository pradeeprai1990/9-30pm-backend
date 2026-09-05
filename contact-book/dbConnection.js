const { MongoClient } = require('mongodb');
let url=`mongodb://127.0.0.1:27017`
let client = new MongoClient(url);
let dbConnection=async ()=>{
    //Server Connection
    await client.connect(); 
    //Db Create
    let db=client.db(process.env.DBNAME);
    return db
}
module.exports={dbConnection}