const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/user");


// This 2 line is just to access the database

// require mongoose and then connect function with Connectiong path argument
// mongoose.connect("mongodb://localhost:27017/user");
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });
