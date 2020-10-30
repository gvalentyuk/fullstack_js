import React from 'react'
import { useSelector } from "react-redux";

import CartItem from "../cart-item/cart-item.component";

const CartList = () => {
    const { cart } = useSelector(state => state.cart)
    return (
        <div className="cart-list">
            {
                cart.map(item => <CartItem key={item._id} item={item}/>)
            }
        </div>
    )
}

export default CartList