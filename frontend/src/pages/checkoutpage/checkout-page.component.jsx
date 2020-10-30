import React from 'react'

import ShippingAddress from "../../components/shipping-adress/shipping-address.component";
import { CheckoutNameContainer } from "./checkout-page.styles";

const CheckoutPage = () => {
    return (
        <div className="checkout">
            <CheckoutNameContainer>Оформление заказа</CheckoutNameContainer>
            <ShippingAddress />
        </div>
    )
}

export default CheckoutPage