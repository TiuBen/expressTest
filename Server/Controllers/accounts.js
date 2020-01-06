// /*
//  * account controller 
// */ 



// var account=require('../models/accounts');






// module.exports={
//     createNewAccount:function (n,p) {
//         console.log("create user");
//         var newUser=new account({name:n,password:p});
//         newUser.save( function(err,doc){
//             if (err) {
//                 console.log('保存失败');
//             } else {
//                 console.log('保存成功'+doc);                
//             }
//         })
//     },
//     checkAccountExist:async function (user) {
//         console.log('user name:'+user.name);
//         var c;
//          await account.find({name:{$eq:user.name}}).countDocuments(function(err, count){
//             console.log("Number of docs: ", count );
//             if (count>=1) {
//                 console.log('在数据库中查询，已经存在');
//             } else {
//                 console.log('在数据库中查询，不存在');
//             }
//             c=count;
//         });
//         return c;
//     },
//     getOneAccount:function name(condition) {
//         /*
//          *  
//         */ 
//         // condition=true;
//         if (condition) {
//             console.log('return true');
//             return true;
//         } else {
//             console.log('return false');
//             return true;
//         }        
//     },
//     updateOneAccount:function name(params) {
        
//     },
//     deleteOneAccount:function name(params) {
        
//     }






// }