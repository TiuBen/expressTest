const express =require('express');
const router=express.Router();

//import controller
const ControllerGeojson=require('../controllers/geojson');


// router.get('/radar',radar_controller.radar_data);
router.get('/geojsonmap/:id',ControllerGeojson.getZhhhAppRnpAirwayLineGeojson);


module.exports=router;