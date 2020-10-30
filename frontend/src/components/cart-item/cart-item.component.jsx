import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { startRemoveFromCartAsync } from "../../redux/cart/cart.actions";
import { CartItemContainer, ImageContainer } from "./cart-item.styles";

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const removeHandler = () => {
        dispatch(startRemoveFromCartAsync(item, user.token))
    }

    return (
        <CartItemContainer>
            <ImageContainer>
                <img src={item.image} alt=""/>
            </ImageContainer>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p onClick={removeHandler}><i className="fas fa-trash"/></p>
        </CartItemContainer>
    )
}

export default CartItem