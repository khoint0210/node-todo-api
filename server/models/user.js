var mongoose = require('mongoose');
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

module.exports = {User}
