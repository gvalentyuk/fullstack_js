import cartActionsTypes from "./cart.types";

const INITIAL_STATE = {
    cart: [],
    loading: false,
    success: null,
    error: null,
    loadingCart: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionsTypes.START_ADD_TO_CART:
        case cartActionsTypes.START_REMOVE_FROM_CART:
            return {
                ...state,
                loading: true
            }
        case cartActionsTypes.SUCCESS_ADD_TO_CART:
        case cartActionsTypes.SUCCESS_REMOVE_FROM_CART:
            return {
                ...state,
                success: true,
                cart: action.payload
            }
        case cartActionsTypes.FAILURE_ADD_TO_CART:
        case cartActionsTypes.FAILURE_REMOVE_FROM_CART:
            return {
                ...state,
                error: action.payload
            }
        case cartActionsTypes.START_FETCH_CART:
            return {
                ...state,
                loadingCart: true
            }
        case cartActionsTypes.FAILURE_FETCH_CART:
            return {
                ...state,
                loadingCart: false,
                error: action.payload
            }
        case cartActionsTypes.SUCCESS_FETCH_CART:
            return {
                ...state,
                loadingCart: false,
                cart: action.payload
            }
        case cartActionsTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: [...state.cart.filter(item => item._id !== action.payload._id)]
            }
        default: return state
    }
}

export default cartReducer