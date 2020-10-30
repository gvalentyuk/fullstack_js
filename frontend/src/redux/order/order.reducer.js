import orderActionsTypes from "./order.types";

const INITIAL_ADDRESS = {
    address: {},
    paymentMethod: '',
    loading: false,
    success: false,
    error: null,
    orderLoading: false,
    order: null
}

const orderReducer = ( state = INITIAL_ADDRESS, action) => {
    switch (action.type) {
        case orderActionsTypes.ADD_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case orderActionsTypes.PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }
        case orderActionsTypes.START_REQUEST_ORDER:
            return {
                ...state,
                loading: true
            }
        case orderActionsTypes.SUCCESS_REQUEST_ORDER:
            return {
                ...state,
                loading: false,
                success: true
            }
        case orderActionsTypes.FAILURE_REQUEST_ORDER:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case orderActionsTypes.START_FETCH_ORDER:
            return {
                ...state,
                orderLoading: true
            }
        case orderActionsTypes.SUCCESS_FETCH_ORDER:
            return {
                ...state,
                orderLoading: false,
                order: action.payload,
                 error: null
            }
        case orderActionsTypes.FAILURE_FETCH_ORDER:
            return {
                ...state,
                orderLoading: false,
                error: action.payload
            }
        default: return state
    }
}

export default orderReducer