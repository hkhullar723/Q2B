const express = require('express')
const router = express.Router()
const calculateFee = require('../controllers/calculatefee')

// route
router.post('/fee',calculateFee)

module.exports = router;