var apiV1=require('express').Router();

//
var  jwt=require('jsonwebtoken');
const payload={name:'shenning',password:'password'};
const secret='thisisthesecret';


function testToken(res,req,next) {
    console.log('begin test TOKEN');
    console.log(res.body);
    var foo=res.body;
    var token=jwt.sign(payload,secret);
    console.log('*********');
    var decoded = jwt.verify(token, secret);
    console.log(decoded) // bar

    req.send(token);
    next();
}

// apiV1.use(testToken);
//


apiV1.use(require('./_login'));
apiV1.use(require('./_main'));
apiV1.use(require('./accounts'));
apiV1.use(require('./_join'));


module.exports=apiV1;
