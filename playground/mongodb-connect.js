// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'andrew', age:25};
// var {name, age} = user;
// console.log(name, age);

// var connection = 'mongodb://192.168.198.138:27017/TodoApp';
var connection = 'mongodb://u_todoapi:pass_todoapi@ds137090.mlab.com:37090/d_todoapi';
MongoClient.connect(connection, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });

  db.collection('Users').insertOne({
    name: 'Sean',
    age: '50',
    location: 'TianJin'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user: ', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
