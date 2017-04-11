const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

Todo.findByIdAndRemove('58ecdd3739ebe70011963f6a').then((todo) => {
  console.log(todo);
});
