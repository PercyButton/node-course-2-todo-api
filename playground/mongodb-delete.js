// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.198.138:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // delete many
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result.result);
  // }, (err) => {
  //   console.log('Error: ', err);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result.result);
  // }, (err) => {
  //   console.log('Error: ', err);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Error: ', err);
  // });

  //challenge
  // db.collection('Users').deleteMany({name: 'Sean'}).then((result) => {
  //   console.log(result.result);
  // }, (err) => {
  //   console.log('Error: ', err);
  // });

  var obj = new ObjectID('58c9e79be0690d230045afb2');
  db.collection('Users').deleteOne({_id: obj}).then((result) => {
    console.log(result.result);
  }, (err) => {
    console.log('Error: ', err);
  });

  db.close();
});
