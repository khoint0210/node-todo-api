const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://khoivip98:khoivip98@ds159330.mlab.com:59330/todos');

module.exports = {
  mongoose
};
