// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//deleteOne
 // db.collection('Todos').deleteOne({text: 'Eat luch'}).then((result) => {
 //  console.log(result);
 // });

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat luch'}).then((result) => {
//   console.log(result);
// });
//findOneAndDelete
db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
  console.log(result);
});

db.close();
});
