var router=require('express').Router();

var jwt=require('jsonwebtoken');
const secret=require('../util/secret');


router.get('/join',function(rq,rs,nxt){
    rs.send('page join router');
})

router.post('/join',function(req,res,next){
    var name=req.body.name;
    var password=req.body.password;
    console.log("注册 用户名："+name+" 密码:"+password);
    const saveNewAccount=require('../controllers/accounts').createNewAccount(name,password);

    var token=jwt.sign({n:name,p:password},secret);


    res.send({'token':token});
    next();
});


module.exports=router;