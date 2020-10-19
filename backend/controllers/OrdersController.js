const asyncHandler = require('../middleware/asyncHandler')
const Order = require('../models/OrderModel')
const User = require('../models/UserModel')

//@route    POST /api/orders
//@access   Private
//@desc     Post new order
exports.createOrder = asyncHandler( async (req, res, next) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice
    } = req.body

    const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
        user: req.user._id
    })

    const createdOrder = await order.save()

    const user = await User.findById(req.user._id)
    user.cart = []
    await user.save()
    res.status(201).json({createdOrder})
})


//@route    GET /api/orders/:id
//@access   Private
//@desc     Get order by id
exports.getOrder = asyncHandler( async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('orderItems user')
    res.status(201).json({order})
})
