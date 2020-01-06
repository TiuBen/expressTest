const  express = require('express')
const app = express()
const port = 3000
const router=express.Router();
router.get('/',function(req,res,next){
//    console.log(__dirname);
//    var options = {
//      root: __dirname ,
//      dotfiles: 'deny',
//      headers: {
//          'x-timestamp': Date.now(),
//          'x-sent': true
//      }
//    };

//    res.sendFile('main.html', options, function (err) {
//      if (err) {
//        next(err);
//      } else {
//        console.log('Sent:');
//    }
//    }); 

        res.send("welcome!");

  })

router.get('/zhhhapp',function(req,res,next){
    console.log(__dirname);
    var options = {
      root: __dirname ,
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    res.sendFile('zdtm.html', options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log('Sent:');
      }
    });
  })






//  app.use('/',router);

app.use('/',router);




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
