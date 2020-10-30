import axios from 'axios'
import productsActionsTypes from "./products.types";

//get all products
export const startFetchingProducts = (keyword='') => ({
        type: productsActionsTypes.PRODUCTS_FETCHING_START,
        payload: keyword
    })


export const successFetchingProducts = products => ({
    type: productsActionsTypes.PRODUCTS_FETCHING_SUCCESS,
    payload: products
})

export const failureFetchingProducts = error => ({
    type: productsActionsTypes.PRODUCTS_FETCHING_FAILURE,
    payload: error
})

export const startFetchingProductsAsync = (keyword = '') => {
    return async dispatch => {
        dispatch(startFetchingProducts())
        try {
            const {data} = await axios.get(`/api/products?keyword=${keyword}`)
            dispatch(successFetchingProducts(data.products))
        } catch (e) {
            dispatch(failureFetchingProducts(e.message))
        }
    }
}

//get single product
export const startFetchingProduct = id => ({
    type: productsActionsTypes.PRODUCT_FETCHING_START,
    payload: id
})

export const successFetchingProduct = products => ({
    type: productsActionsTypes.PRODUCT_FETCHING_SUCCESS,
    payload: products
})

export const failureFetchingProduct = error => ({
    type: productsActionsTypes.PRODUCT_FETCHING_FAILURE,
    payload: error
})

export const startFetchingProductAsync = id => {
    return async dispatch => {
        dispatch(startFetchingProduct())
        try {
            const {data} = await axios.get(`/api/products/${id}`)
            dispatch(successFetchingProduct(data.product))
        } catch (e) {
            dispatch(failureFetchingProduct(e.message))
        }
    }
}


export const startRemoveProduct = (id, token) => ({
    type: productsActionsTypes.START_REMOVE_PRODUCT,
    payload: {id, token}
})

export const successRemoveProduct = id => ({
    type: productsActionsTypes.SUCCESS_REMOVE_PRODUCT,
    payload: id
})

export const failureRemoveProduct = error => ({
    type: productsActionsTypes.FAILURE_REMOVE_PRODUCT,
    payload: error
})


const startCreateProduct = () => ({
    type: productsActionsTypes.START_CREATE_PRODUCT
})

const successCreateProduct = id => ({
    type: productsActionsTypes.SUCCESS_CREATE_PRODUCT,
    payload: id
})

const failureCreateProduct = error => ({
    type: productsActionsTypes.FAILURE_CREATE_PRODUCT,
    payload: error
})

export const startCreateProductAsync = (product, file, token, cb) => {
    return async dispatch => {
        dispatch(startCreateProduct())
        try {
            const {data} = await axios.post(`/api/products`,
                {
                    ...product,
                    image: file.name
                }, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": 'application/json'
                    }
                })
            const formData = new FormData()
            formData.append('image', file)
            const config = {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            }
            await axios.post('/api/upload', formData, config)
                .then(_ => cb())
            dispatch(successCreateProduct(data))
        } catch (e) {
            dispatch(failureCreateProduct(e.message))
        }
    }
}


const startCreateReview = () => ({
    type: productsActionsTypes.START_CREATE_REVIEW
})

const failureCreateReview = error => ({
    type: productsActionsTypes.FAILURE_CREATE_REVIEW,
    payload: error
})

export const startCreateReviewAsync = (id, review, token) => {
    return async dispatch => {
        dispatch(startCreateReview())
        try {
            await axios.post(`/api/products/${id}/review`, review, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": 'application/json'
                }
            })
            dispatch(startFetchingProductAsync(id))
        } catch (e) {
            dispatch(failureCreateReview(e.message))
        }
    }
}