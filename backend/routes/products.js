const { Router } = require('express')
const { admin } = require('../middleware/adminMiddleware')
const { protect } = require('../middleware/authMiddleware')
const {getProducts, getSingleProduct, deleteProduct, createProduct, createProductReview } = require('../controllers/ProductsController')
const router = Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getSingleProduct).delete(protect, admin, deleteProduct)
router.route('/:id/review').post(protect, createProductReview)

module.exports = router