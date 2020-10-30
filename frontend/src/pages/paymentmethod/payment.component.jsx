import React from 'react'

import PaymentForm from "../../components/payment/payment-form.component";
import { CheckoutNameContainer } from "./paymentmethod.styles";

const Payment = () => {
    return (
        <div>
            <CheckoutNameContainer>Оформление заказа</CheckoutNameContainer>
            <PaymentForm />
        </div>
    )
}

export default Payment