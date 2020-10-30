import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { persistStore } from "redux-persist";
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from "./root.saga";
import persistedReducer from "./root.reducer";

const sagaMiddleware = createSagaMiddleware()

const middleware = [logger, thunk]

export const store = createStore(persistedReducer, applyMiddleware(...middleware))

// sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store