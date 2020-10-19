const asyncHandler = require('../middleware/asyncHandler')
const Product = require('../models/ProductModel')


//@route    GET /api/products
//@access   Public
//@desc     Get all products
exports.getProducts = asyncHandler(async (req, res, next) => {
    const keyword = req.query.keyword ?
        {
            name: {
                $regex: req.query.keyword,
                $options: 'i'
            }
        } : {}

    const products = await Product.find({...keyword})
    res.status(200).json({products})
})


//@route    Get /api/products/:id
//@access   Public
//@desc     Get all products
exports.getSingleProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id).populate('reviews')

    if (product) {
        return res.status(200).json({product})
    } else {
        throw new Error('Продукт не найден')
    }
})

//@route    DELETE /api/products/:id
//@access   Private/admin
//@desc     Delete product
exports.deleteProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findByIdAndRemove(req.params.id)

    if (product) {
        return res.status(200).json({msg: 'Удалил'})
    } else {
        throw new Error('Продукт не найден')
    }
})

//@route    POST /api/products
//@access   Private/admin
//@desc     Create product
exports.createProduct = asyncHandler(async (req, res, next) => {
    const {
        name,
        brand,
        category,
        description,
        price,
        countInStock,
        image
    } = req.body

    const product = new Product({
        user: req.user._id,
        image: `/images/${image}`,
        name,
        brand,
        category,
        description,
        price,
        countInStock
    })

    const saveProduct = await product.save()
    res.status(200).json({product: saveProduct})
})


//@route    POST /api/products/:id/review
//@access   Private
//@desc     Create product review
exports.createProductReview = asyncHandler(async (req, res, next) => {
    const {rating, comment} = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id)

        if (alreadyReviewed) {
            res.status(400)
            throw new Error('Вы уже оставляли отзыв')
        }
    }

    const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

    await product.save()

    res.status(200).json({message: "Отзыв добавлен"})
})