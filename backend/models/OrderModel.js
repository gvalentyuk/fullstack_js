const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        orderItems: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
        ],
        shippingAddress: {
            address: {type: String, required: true},
            city: {type: String, required: true},
            postalCode: {type: String, required: true},
            country: {type: String, required: true},
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Order', orderSchema)