import productsActionsTypes from "./products.types";

const INITIAL_STATE = {
    productsLoading: false,
    productsError: null,
    products: [],
    productLoading: false,
    productError: null,
    product: {},
    removeError: null,
    creatingProduct: {},
    reviewLoading: false,
    reviewSuccess: {},
    reviewError: null
}

const productsReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type){
        case productsActionsTypes.START_CREATE_REVIEW:
            return {
                ...state,
                reviewLoading: true
            }
        case productsActionsTypes.SUCCESS_CREATE_REVIEW:
            return {
                ...state,
                reviewLoading: false,
                product: {...state.product, reviews: [...state.product.reviews, action.payload.review]}
            }
        case productsActionsTypes.FAILURE_CREATE_REVIEW:
            return {
                ...state,
                reviewLoading: false,
                removeError: action.payload
            }
        case productsActionsTypes.START_CREATE_PRODUCT:
        case productsActionsTypes.PRODUCTS_FETCHING_START:
            return {
                ...state,
                productsLoading: true
            }
        case productsActionsTypes.FAILURE_CREATE_PRODUCT:
        case productsActionsTypes.PRODUCTS_FETCHING_FAILURE:
            return {
                ...state,
                productsLoading: false,
                productsError: action.payload
            }
        case productsActionsTypes.PRODUCTS_FETCHING_SUCCESS:
            return {
                ...state,
                productsLoading: false,
                products: action.payload
            }
        case productsActionsTypes.PRODUCT_FETCHING_START:
            return {
                ...state,
                productLoading: true
            }
        case productsActionsTypes.PRODUCT_FETCHING_FAILURE:
            return {
                ...state,
                productLoading: false,
                productError: action.payload
            }
        case productsActionsTypes.PRODUCT_FETCHING_SUCCESS:
            return {
                ...state,
                productLoading: false,
                product: action.payload
            }
        case productsActionsTypes.START_REMOVE_PRODUCT:
            return {...state}
        case productsActionsTypes.FAILURE_REMOVE_PRODUCT:
            return {
                ...state,
                removeError: action.payload
            }
        case productsActionsTypes.SUCCESS_REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }
        case productsActionsTypes.SUCCESS_CREATE_PRODUCT:
            return {
                ...state,
                productsLoading: false,
                creatingProduct: action.payload
            }
        default: return state
    }
}

export default productsReducer