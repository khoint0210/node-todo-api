// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://khoivip98:khoivip98@ds159330.mlab.com:59330/todos', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('Todos').findOneAndUpdate({
  text: 'Something to do'
}, {
  $set: {
    complete: true,
    text: 'Eat lunch'
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

db.collection('Khoi').findOneAndUpdate({
  _id: new ObjectID('58e9b6720ab93d06e841c08e')
}, {
  $set: {
    name: 'Nguyễn Trường Khôi',
    location: 'Nha Trang'
  },
  $inc: {
    age: -1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

db.close();
});
