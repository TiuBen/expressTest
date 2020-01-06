var mongooseDB = require('mongoose');
DB_URL = 'mongodb://127.0.0.1:27017/testmongodb1';

/*
 * connection to a database 
 */

mongooseDB.connect(DB_URL, (err) => {
    if (err) {
        console.log('connected failed');
    } else {
        console.log('connected success');

        var Schema = mongooseDB.Schema;
        var userSchema = new Schema({
            name: String,
            password: String
        })

        var user = mongooseDB.model('user', userSchema);
        const user1 = new user({
            name: '沈宁',
            password: '123456pp'
        });
        user1.save(function (err, doc) {
            console.log(doc);
        })




    }
})

/*
 * schema 
 */