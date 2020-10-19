const User = require('../models/UserModel')
const asyncHandler = require('./asyncHandler')

exports.admin = asyncHandler( async(req, res, next) => {
    const user = await User.findById(req.user._id)

    if(user.isAdmin){
        next()
    } else {
        throw new Error('Ты не админ')
    }
})