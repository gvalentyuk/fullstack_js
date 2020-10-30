import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'

import {startFetchCartAsync} from "../../redux/cart/cart.actions";
import LoaderBackdrop from "../../components/loader/loader.component";
import CartList from "../../components/cart-list/cart-list.component";

import {
    BasketHeaderContainer, TotalPriceContainer, EmptyCartContainer,
    CartContainer, ButtonContainer
} from "./cartpage.styles";

const Cartpage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user)

    useEffect(() => {
        dispatch(startFetchCartAsync(user.token))
    }, [dispatch, user.token])

    const {cart, loadingCart} = useSelector(state => state.cart)
    const price = cart.reduce((accumalate, item) => accumalate += item.price, 0)

    if (loadingCart) {
        return <LoaderBackdrop/>
    }
    return (
        <CartContainer>
            <BasketHeaderContainer>КОРИЗИНА</BasketHeaderContainer>
            {
                !user.name? <p>Коризна доступна для авторизованных пользователей.</p>:
                cart.length
                    ? <>
                        <CartList/>
                        <TotalPriceContainer>
                            <p>Общая стоимость: $ {price.toFixed(2)}</p>
                            {
                                user.name
                                    ? <ButtonContainer onClick={() => history.push('/checkout')}>Оплатить</ButtonContainer>
                                    : <p>Для оплаты небходимо войти.</p>
                            }
                        </TotalPriceContainer>
                    </>
                    : <EmptyCartContainer>Ваша корзина пуста.</EmptyCartContainer>
            }
        </CartContainer>
    )
}

export default Cartpage