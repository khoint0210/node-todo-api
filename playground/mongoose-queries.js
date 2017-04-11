const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
const id = '58e9ce6915dc6d0b704543c1';
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=> {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=> {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//  if (!todo) {
//    return console.log('Not found any record');
//  }
// console.log('Todo', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Not Found any record');
  }
  console.log('Todo', todo);
}).catch((e) => {
  console.log(e);
  });
