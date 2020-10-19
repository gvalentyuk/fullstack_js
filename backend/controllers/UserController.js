const User = require('../models/UserModel')
const Order = require('../models/OrderModel')
const asyncHandler = require('../middleware/asyncHandler')
const generateJWT = require('../utils/generateJWT')

//@route    POST /api/user/login
//@access   Public
//@desc     Login user
exports.login = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password))) {
        return res
            .status(200)
            .json({
                name: user.name,
                email: user.email,
                id: user._id,
                isAdmin: user.isAdmin,
                cart: user.cart,
                token: generateJWT(user._id)
            })
    } else {
        res.status(401)
        throw new Error('Неверные данные')
    }
})


//@route    GET /api/user/profile
//@access   Private
//@desc     Get profile
exports.getProfile = asyncHandler(async (req, res, next) => {
    const profile = await User.findById(req.user._id).select('-password')
    const orders = await Order.find({user: req.user._id}).populate('orderItems')
    res.status(200).json({
        profile,orders
    })
})


//@route    POST /api/user/profile
//@access   Public
//@desc     Create profile
exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password} = req.body
    const userExist = await User.findOne({email})

    if( userExist ) {
        res.status(401)
        throw new Error("Пользователь уже существует")
    }

    const user = await User.create({
        name, email, password
    })

    if( user ) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateJWT(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Некорректные данные')
    }
})


//@route    PUT /api/user/add
//@access   Private
//@desc     Add to cart
exports.addToCart = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    user.cart.push(req.body.item)
    const updUser = await user.save()
    return res.status(200).json({cart: updUser.cart})
})

//@route    PUT /api/user/remove
//@access   Private
//@desc     Delete from cart
exports.removeFromCart = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    user.cart = user.cart.filter(item => item._id !== req.body.item._id)
    const updUser = await user.save()
    return res.status(200).json({cart: updUser.cart})
})

//@route    PUT /api/user/cart
//@access   Private
//@desc     Fetch cart
exports.fetchCart = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    return res.status(200).json({cart: user.cart})
})
