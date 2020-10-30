import axios from 'axios'
import cartActionsTypes from "./cart.types";

const startAddToCart = () => ({
    type: cartActionsTypes.START_ADD_TO_CART
})

const successAddToCart = cart => ({
    type: cartActionsTypes.SUCCESS_ADD_TO_CART,
    payload: cart
})

const failureAddToCart = () => ({
    type: cartActionsTypes.FAILURE_ADD_TO_CART
})

export const startToAddCartAsync = (item, token) => async dispatch => {
    dispatch(startAddToCart())
    try{
       const { data } = await axios('/api/user/cart/add',{
            method: 'put',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: {item}
        })
        dispatch(successAddToCart(data.cart))
    } catch (e) {
        dispatch(failureAddToCart(e))
    }
}

const startRemoveFromCart = ()  => ({
    type: cartActionsTypes.START_REMOVE_FROM_CART
})

const failureRemoveFromCart = error  => ({
    type: cartActionsTypes.FAILURE_REMOVE_FROM_CART,
    payloa: error
})

const successRemoveFromCart = cart => ({
    type: cartActionsTypes.SUCCESS_REMOVE_FROM_CART,
    payload: cart
})

export const startRemoveFromCartAsync = (item, token) => async dispatch => {
    dispatch(startRemoveFromCart())
    try{
        const { data } = await axios('/api/user/cart/remove',{
            method: 'put',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: {item}
        })
        dispatch(successRemoveFromCart(data.cart))
    } catch (e) {
        dispatch(failureRemoveFromCart(e))
    }
}



const startFetchCart = () => ({
    type: cartActionsTypes.START_FETCH_CART
})

const failureFetchCart = error => ({
    type: cartActionsTypes.FAILURE_FETCH_CART,
    payload: error
})

const successFetchCart = cart => ({
    type: cartActionsTypes.SUCCESS_FETCH_CART,
    payload: cart
})

export const startFetchCartAsync = token => async dispatch => {
    dispatch(startFetchCart())
    try {
        const { data } = await axios.get('/api/user/cart', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        dispatch(successFetchCart(data.cart))
    } catch (e) {
        dispatch(failureFetchCart(e.response.message))
    }
}