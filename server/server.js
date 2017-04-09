var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlenght: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
// console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//   text: '   test  ',
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// },(e) => {
//   console.log('Unable to save todo');
// });



var User = mongoose.model('User' ,{
  email:{
    type: String,
    trim: true,
    minlenght: 1,
    required: true
  },
  name:{
    type: String,
    trim: true,
    minlenght: 1,
    required: true
  },
  age:{
    type: Number,
    trim: true,
    required: true
  },
  location:{
    type: String,
    trim: true,
    minlenght: 1,
    required: true
  }
});

var userEmail = new User({
  name: 'Nguyễn Trường Khôi',
  age: 19,
  location: 'Nha Trang',
  email: '   nguyentruongk@gmail.com    ',
});

userEmail.save().then((doc)=> {
  console.log('Saved info succsees');
  console.log(doc);
},(e) => {
  console.log('Saved info false' ,e);
});
