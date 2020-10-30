import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'

import { startOrderAsync } from "../../redux/order/order.actions";
import OrderItem from "../../components/order-item/order-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
    OrderHeaderContainer, OrderContainer, OrderUserContainer, ConfirmOrder, OrderPageContainer,
    OrderItems
} from "./orderpage.styles";

const OrderPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {user} = useSelector(state => state.user)
    const {address, paymentMethod} = useSelector(state => state.order)
    const {cart} = useSelector(state => state.cart)
    const totalPrice = cart.reduce((accum, item) => accum += item.price, 0)

    const submitHandler = () => {
        dispatch(startOrderAsync({
            orderItems: cart,
            shippingAddress: address,
            paymentMethod: paymentMethod,
            totalPrice
        }, user.token))
        history.push('/')
    }

    return (
        <OrderPageContainer>
            <OrderHeaderContainer>ПОДТВЕРЖДЕНИЕ ЗАКАЗА</OrderHeaderContainer>
            <OrderContainer>
                <OrderUserContainer>
                    <h4>Информация о пользователе:</h4>
                    <p>Имя пользователя: <span>{user.name}</span></p>
                    <p>Электронная почта: <span>{user.email}</span></p>
                </OrderUserContainer>
                <OrderUserContainer>
                    <h4>Оплата:</h4>
                    <p>Способ оплаты: <span>{paymentMethod}</span></p>
                </OrderUserContainer>
                <OrderUserContainer>
                    <h4>Адресс доставки:</h4>
                    <p>{address.country}, г.{address.city}, ул.{address.address}</p>
                    <p>Почтовый индекс: <span>{address.postalCode}</span></p>
                </OrderUserContainer>
                <OrderItems>
                    {
                        cart.map(item => <OrderItem key={item._id} item={item}/>)
                    }
                </OrderItems>
            </OrderContainer>
            <ConfirmOrder>
                <p>Общая стоимость: <span>$ {totalPrice.toFixed(2)}</span></p>
                <CustomButton onClick={submitHandler}>Подтвердить</CustomButton>
            </ConfirmOrder>
        </OrderPageContainer>
    )
}

export default OrderPage