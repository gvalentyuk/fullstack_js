const { Router } = require('express')
const { createOrder, getOrder } = require('../controllers/OrdersController')
const { protect } = require('../middleware/authMiddleware')
const router = Router()

router.route('/').post(protect, createOrder)
router.route('/:id').get(protect, getOrder)

module.exports = router