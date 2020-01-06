// const mongoose = require('mongoose');
// var db = mongoose.connection;
// var DB_URL='mongodb://127.0.0.1:27017/testmongodb1';

//     mongoose.Promise = global.Promise;

// //连接
// mongoose.connect(DB_URL,{ useNewUrlParser: true });

// //连接成功
// db.on('connected', function () {
//     console.log('Mongoose connection open to ' + DB_URL);
// });

// //连接异常
// db.on('error',function (err) {
//     console.log('Mongoose connection error: ' + err);
// });

// //连接断开
// db.on('disconnected', function () {
//     console.log('Mongoose connection disconnected');
// });

// const Schema = mongoose.Schema;

// const AccountSchema = new Schema({
//     name: String,
//     password:String,
// });

// module.exports = mongoose.model('account', AccountSchema);