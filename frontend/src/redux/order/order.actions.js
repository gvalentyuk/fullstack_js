import axios from 'axios'
import orderActionsTypes from "./order.types";

export const addAddress = address => {
    localStorage.setItem('address', JSON.stringify(address))
    return {
        type: orderActionsTypes.ADD_ADDRESS,
        payload: address
    }
}

export const addPaymentMethod = method => ({
    type: orderActionsTypes.PAYMENT_METHOD,
    payload: method
})

const startRequestOrder = () => ({
    type: orderActionsTypes.START_REQUEST_ORDER
})

const successRequestOrder = () => ({
    type: orderActionsTypes.SUCCESS_REQUEST_ORDER
})

const failureRequestOrder = err => ({
    type: orderActionsTypes.FAILURE_REQUEST_ORDER,
    payload: err
})

export const startOrderAsync = (order, token) => async dispatch => {
    dispatch(startRequestOrder())
    try {
        await axios('/api/orders', {
            method: 'post',
            data: order,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        dispatch(successRequestOrder())
    } catch (e) {
        dispatch(failureRequestOrder(e.response.data.message))
    }
}


const startFetchOrder = () => ({
    type: orderActionsTypes.START_FETCH_ORDER
})

const successFetchOrder = order => ({
    type: orderActionsTypes.SUCCESS_FETCH_ORDER,
    payload: order
})

const failureFetchOrder = err => ({
    type: orderActionsTypes.FAILURE_FETCH_ORDER,
    payload: err
})

export const startFetchOrderAsync = (id, token) => async dispatch => {
    dispatch(startFetchOrder())
    try {
        const res = await axios(`/api/orders/${id}`, {
            method: 'get',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        dispatch(successFetchOrder(res.data.order))
    } catch (e) {
        dispatch(failureFetchOrder(e.response.data.message))
    }
}