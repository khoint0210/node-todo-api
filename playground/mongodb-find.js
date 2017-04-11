// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://khoivip98:khoivip98@ds159330.mlab.com:59330/todos', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 db.collection('Todos').find().toArray().then((docs) => {
   console.log('Todos');
   console.log(JSON.stringify(docs, undefined, 2));
 }, (err) => {
   console.log('Unable to fetch todos', err);
 });

db.close();
});
