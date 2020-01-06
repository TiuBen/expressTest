const express=require('express');
const routes=express.Router();


//
const geojson=require('./geojson');



routes.use(geojson);






module.exports=routes;
