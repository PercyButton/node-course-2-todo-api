const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result.result);
// });

Todo.findOneAndRemove('58cf9915eb1ea9d5d84e3dca').then((todo) => {
  console.log(todo);
})

// Todo.findByIdAndRemove('58cf982019ab5d781ecfafcb').then((todo) => {
//   console.log(todo);
// });
