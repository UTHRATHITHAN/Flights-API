const express = require('express')

const {AirplaneController} = require('../../controllers')
const {AirplaneMiddleware} = require('../../middlewares')

const router = express.Router();

router.post('/' , AirplaneMiddleware.validateCreateRequest ,AirplaneController.createAirplane )
router.get('/' ,AirplaneController.getAirplane )
router.get('/:id',AirplaneController.getById)



module.exports = router;

 