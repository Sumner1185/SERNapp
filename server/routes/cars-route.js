const express = require('express')
const carRoutes = require('./../controllers/cars-controller')
const router = express.Router()

router.get('/all', carRoutes.carsAll)

router.post('/create', carRoutes.carCreate)

router.delete('/:id', carRoutes.carDelete)

router.put('/reset', carRoutes.carsReset)

module.exports = router
