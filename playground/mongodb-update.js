// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.198.138:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58ca63f57b9a593ad611d013')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Error: ', err);
  // })

  // db.collection('Users').findOneAndUpdate({
  //   name: "Jean"
  // }, {
  //   $set: {
  //     name: 'Sean'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Error: ', err);
  // })

  db.collection('Users').findOneAndUpdate({
    name: "Sean"
  }, {
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Error: ', err);
  })

  db.close();
});
