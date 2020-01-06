var router=require('express').Router();

// 动作	URL路径	路径参数	例子
// 创建一个新记录	/accounts		http://example/api/accounts
// 读取一个list的记录	/accounts		http://example/api/accounts
// 读取指定的记录	/accounts	locationId	http://example/api/accounts/123
// 更新指定记录	/accounts	locationId	http://example/api/accounts/123
// 删除指定记录	/accounts	locationId	http://example/api/accounts/123

const accountsController=require('../controllers/accounts');



router.route('/accounts') 
    .get(function(rq,rs,next){
        console.log('get accounts router,读取一个用户');
     

        next();
    })
    .post(function(rq,rs,next){
        console.log('post accounts router，新建一个用户');
        accountsController.createNewAccount();

        next();
    })
    .put(function (req,res,next) {
        console.log('post accounts router，更新一个用户');
        next();
    })
    .delete(function (req,res,next) {
        console.log('post accounts router，删除一个用户');
        next();
    })

module.exports=router;