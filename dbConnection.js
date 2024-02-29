const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
const dbName = "all-data";
let data = { name: 'Test' };

async function connectDB() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("student-data");
    return collection;
}

async function getData() {
    let collection = await connectDB();
    var result = await collection.find({}).toArray();
}

async function insertData(data) {
    let collection = await connectDB();
    try {
        var result = await collection.insertOne(data);
        return result.acknowledged == true ? result.insertedId : null;
    } catch (error) {
        if (error instanceof MongoServerError) {
            console.log(`Error worth logging: ${error}`);
        }
        throw error;
    }
}

module.exports = {
    getData,
    insertData
};