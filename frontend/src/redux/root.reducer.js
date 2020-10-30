import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";

import productsReducer from "./products/products.reducer";
import cartReducer from "./cart/cart.reducer";
import orderReducer from "./order/order.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'order', 'cart', 'products']
}

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    order: orderReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer