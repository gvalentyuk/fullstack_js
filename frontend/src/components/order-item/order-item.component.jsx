import React from 'react'
import {CartItemContainer, ImageContainer, InfContainer} from "./order-item.styles";

const OrderItem = ({item}) => {
    return (
            <CartItemContainer>
                <ImageContainer>
                    <img src={item.image} alt=""/>
                </ImageContainer>
                <InfContainer>{item.name}</InfContainer>
                <InfContainer>${item.price}</InfContainer>
            </CartItemContainer>
    )
}

export default OrderItem