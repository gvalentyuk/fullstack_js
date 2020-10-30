import {call, all} from 'redux-saga/effects'

import {productsSagas} from "./products/products.sagas";

export function* rootSaga() {
    yield all([
        call(productsSagas)
    ])
}