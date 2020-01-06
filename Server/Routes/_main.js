var router=require('express').Router();

router.get('/main',function(rq,rs,nxt){
    rs.send('page main router');
})

router.post('/main',function(rq,rs,nxt){
    rs.send('page main router');
});


module.exports=router;