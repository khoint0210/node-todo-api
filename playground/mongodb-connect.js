// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://khoivip98:khoivip98@ds159330.mlab.com:59330/todos', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 db.collection('Todos').insertOne({
   text: 'Something to do',
   completed: false
 }, (err, result) => {
   if (err) {
     return console.log('Unable to insert todo', err);
   }

   console.log(JSON.stringify(result.ops, undefined, 2));
 });

// db.collection('Khoi').insertOne({
//   name: 'Khoi',
//   age: 19,
//   location: 'Ho Chi Minh'
// }, (err, result) => {
//  if (err) {
//    return console.log('Unable to insert', err);
//  }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

 db.close();
});
