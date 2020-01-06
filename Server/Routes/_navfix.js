const express =require('express');
const router=express.Router();
//import controller
const navfix_controller=require('../controllers/navfixController');


router.get('/crudnavfix',navfix_controller.createNewNavFix);



module.exports=router;