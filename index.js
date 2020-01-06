const express = require('express');
const app = express();
const port = 3099;
//
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlencodedParser);

var cors = require('cors');
app.use(cors());

// var morgan = require('morgan');
// app.use(morgan('short'));


const routes=require('./Server/Routes/ROUTES');
app.use(routes);


app.get("/",function (req,res) {
    var path=require('path');
    var geojsonFilePath=path.resolve(__dirname)+'/Server/_Temp/HTMLPreview.html';
    console.log(geojsonFilePath);
    res.sendFile(geojsonFilePath);
})

const allPro=require('./Server/_temp/allpro.js')
app.get("/buttons",function (req,res) {
    
    
    res.send(JSON.stringify(allPro));
    
})










app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// var app = require('express')();
//
// app.use('/login',require('./routes/login'));
// app.use('/main',require('./routes/main'));
//
// app.use(require('./routes/main'));
// app.use(require('./routes/login'));

// get router module 
// const radarRouter=require('./routes/radar');

// app.use(radarRouter);


// const navfixRouter=require('./routes/navfix');

// app.use(navfixRouter);


//



// 

// app.use(testMiddleware);


//
// app.use(require('./routes/apiV1'));
//

// const userController=require('./controllers/accounts');
// app.get('/user',userController.create);
// const userController=require('./controllers/accounts');
// app.get('/user',userController.create);

/*
 *  
*/

// app.post('/', (req, res) => {
//   console.log('****服务器端调试*****');
//   console.log(req.body.user);
//   console.log('*********');
//   res.send(req.body.user);
// })


// app.get('/page1', (req, res) => {
//   console.log(res);
//   res.send('page1.html');
// })



// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// app.get('/page2', (req, res) => {
//   res.sendFile(__dirname + '/page2.html');
// });
// app.get('/geo', (req, res) => {
//   res.sendFile(__dirname + '/testgeo.geojson');
// });

// io.on('connection', function (socket) {
//   console.log("ffff")
//   socket.on('chat message', function (msg) {
//     console.log('chat message: '+msg);
//     io.emit('chat message: ' , msg);
//   });
// });
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

// var multer = require('multer');
// var upload = multer({ dest: '/Users/BenjaminShen/Documents/VSCdoe/expressTest/_Temp/' });
// app.put('/upload', upload.single('avatar'), (req, res) => {
//   console.log('test upload');
// })





// app.listen(port, () => console.log(`Example app listening on port ${port}!`));





