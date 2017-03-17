var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.198.138:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Save todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var newTodo1 = new Todo({
//   text: ' Edit this video     '
// });
//
// newTodo1.save().then((doc) => {
//   console.log('Save todo', doc);
// }, (e) => {
//   console.log('Unable to save todo: ', e);
// })

var User = mongoose.model('User', {
  email:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: '   xx@gmail.com '
});

newUser.save().then((doc) => {
  console.log('Save user', doc);
}, (e) => {
  console.log('Unable to save user: ', e);
});
