/*
 * this routr is something with Login
 * 
 *  1. check the uername and password
 *  2. sign a TOKEN with step 1 information
 *  3. check the TOKEN???? 
 * 
 *  
*/ 
var router=require('express').Router();
const getToken=require('../util/tools');
const secret =require('../util/secret') ;
const jsw=require('jsonwebtoken');

const accounts=require('../models/accounts');

router.route('/login') 
    .get(function(req,res,next){
        jsw.verify(getToken(req),secret,function(err, decoded) {
            if (err) {
                console.log(err);
            }else{
                console.log('begin decode')
                console.log(decoded);
                console.log('end decode')

            }   
        });
    })
    .post(function(req,res,next){
        /*
         * 1 make sure the user does exits
         * 2 check the token is correct 
         * 3 redirect to the default user page
        */ 
        let name=req.body.user.emailOrPhone;
        let password=req.body.user.password;
        var user={'name':name,'password':password};
        accounts.find({name:{$eq:user.name}})
            .countDocuments((err,count)=>{
                console.log('count:'+count);   
            })
            .exec((err,count)=>{
                if (err) {
                    console.log('count err');
                    res.status(417).send({error:'Expectation Failed'});
                    // return ;
                } else {
                    console.log("查询用户数量没有出错");
                    if (count>0) {
                        console.log('if判断,大于1的,该用户名已经被占用');
                        res.status(406).send({error:'该用户名已经被占用'});
                    } else {
                        console.log('if判断中等于0的');
                        var newUser=new accounts({'name':name,'password':password});
                        newUser.save( function(err,doc){
                            if (err) {
                                console.log('保存失败');
                                res.status(417).send({error:'Expectation Failed'});
                            } else {
                                console.log('保存成功'+doc);
                                console.log('name'+doc.name);
                                var token=jsw.sign({'name':doc.name,'password':doc.password},secret);
                                res.status(201).send({'token':token});
                            }
                        })
                    }
                }
            })
    })

module.exports=router;