import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'

import { addPaymentMethod } from "../../redux/order/order.actions";
import {PaymentContainer, PaymentMethodContainer, CheckboxContainer, ButtonContainer} from "./payment-form.styles";

const PaymentForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [checked, setChecked] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        dispatch(addPaymentMethod(checked))
        history.push('/confirmorder')
    }
    return (
        <PaymentContainer>
            <PaymentMethodContainer>Способ оплаты:</PaymentMethodContainer>
            <form onSubmit={submitHandler}>
                <CheckboxContainer>
                    <label><input id={'cash'}
                                  type="radio"
                                  checked={checked === 'Наличный рассчет'}
                                  onChange={() => setChecked('Наличный рассчет')}
                    />Наличный рассчет</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <label><input id={'credit'}
                                  type="radio"
                                  checked={checked === 'Банковская карта'}
                                  onChange={() => setChecked('Банковская карта')}
                    />Банковская карта</label>
                </CheckboxContainer>
                <ButtonContainer>ПРОДОЛЖИТЬ</ButtonContainer>
            </form>
        </PaymentContainer>
    )
}

export default PaymentForm