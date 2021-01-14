const { Router } = require('express')
const { login, getProfile, register, addToCart, fetchCart, removeFromCart } = require('../controllers/UserController')
const { protect } = require('../middleware/authMiddleware')
const router = Router()

router.route('/registration').post(register)
router.route('/login').post(login)
router.route('/profile').get(protect, getProfile)
router.route('/cart').get(protect, fetchCart)
router.route('/cart/add').put(protect, addToCart)
router.route('/cart/remove').put(protect, removeFromCart)

module.exports = router
