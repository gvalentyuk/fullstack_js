import {call, put, all, takeLatest} from 'redux-saga/effects'

import productsActionsTypes from "./products.types";
import {
    failureFetchingProducts, successFetchingProducts, successFetchingProduct, failureFetchingProduct,
    successRemoveProduct, failureRemoveProduct, startFetchingProducts
} from './products.actions'
import axios from "axios";


function* startFetchingProductsAsync({payload}) {
    try {
        const {data} = yield axios.get(`/api/products?keyword=${payload}`)
        yield put(successFetchingProducts(data.products))
    } catch (error) {
        yield put(failureFetchingProducts(error))
    }
}

function* startFetchProductAsync({payload}) {
    try {
        const {data} = yield axios.get(`/api/products/${payload}`)
        yield put(successFetchingProduct(data.product))
    } catch (e) {
        yield put(failureFetchingProduct(e.message))
    }
}

function* startRemoveProductAsync({payload: {id, token}}) {
    try {
        yield axios.delete(`/api/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        yield put(successRemoveProduct(id))
        yield put(startFetchingProducts())
    } catch (e) {
        yield put(failureRemoveProduct(e.message))
    }
}

function* startFetchProduct() {
    yield takeLatest(
        productsActionsTypes.PRODUCT_FETCHING_START,
        startFetchProductAsync
    )
}

function* startFetchProducts() {
    yield takeLatest(
        productsActionsTypes.PRODUCTS_FETCHING_START,
        startFetchingProductsAsync
    )
}

function* startRemoveProduct() {
    yield takeLatest(
        productsActionsTypes.START_REMOVE_PRODUCT,
        startRemoveProductAsync
    )
}

export function* productsSagas() {
    yield all([
        call(startFetchProducts),
        call(startFetchProduct),
        call(startRemoveProduct)
    ])
}