const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://kaixiang82:Kaixiang82@cluster0.i7jg1ce.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
    .then(client => {
        console.log("Connected");
        db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

const getDb = () => {
    if(db){
        return db;
    }

    throw 'No Database found!'
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;