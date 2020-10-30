import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import LoaderBackdrop from "../../components/loader/loader.component";
import { startFetchOrderAsync} from "../../redux/order/order.actions";
import {
    ConfirmOrder,
    OrderContainer,
    OrderHeaderContainer,
    OrderItems, OrderPageContainer,
    OrderUserContainer
} from "../orderpage/orderpage.styles";
import OrderItem from "../../components/order-item/order-item.component";

const CheckOrder = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const {user} = useSelector(state => state.user)

    useEffect(() => {
        dispatch(startFetchOrderAsync(params.id, user.token))
    }, [dispatch, params.id, user.token])

    const {order, orderLoading} = useSelector(state => state.order)

    if(orderLoading) {
        return <LoaderBackdrop />
    }

    return (
        <OrderPageContainer>
            <OrderHeaderContainer>ЗАКАЗ {params.id}</OrderHeaderContainer>
            <OrderContainer>
                <OrderUserContainer>
                    <h4>Информация о пользователе:</h4>
                    <p>Имя пользователя: <span>{order.user.name}</span></p>
                    <p>Электронная почта: <span>{order.user.email}</span></p>
                </OrderUserContainer>
                <OrderUserContainer>
                    <h4>Оплата:</h4>
                    <p>Способ оплаты: <span>{order.paymentMethod}</span></p>
                </OrderUserContainer>
                <OrderUserContainer>
                    <h4>Адресс доставки:</h4>
                    <p>{order.shippingAddress.country}, г.{order.shippingAddress.city}, ул.{order.shippingAddress.address}</p>
                    <p>Почтовый индекс: <span>{order.shippingAddress.postalCode}</span></p>
                </OrderUserContainer>
                <OrderItems>
                    {
                        order.orderItems.map(item => <OrderItem key={item._id} item={item}/>)
                    }
                </OrderItems>
            </OrderContainer>
            <ConfirmOrder>
                <p>Общая стоимость: <span>$ {order.totalPrice.toFixed(2)}</span></p>
            </ConfirmOrder>
        </OrderPageContainer>
    )
}

export default CheckOrder