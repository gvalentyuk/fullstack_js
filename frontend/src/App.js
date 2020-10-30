import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from './redux/store'
import Theme from "./Theme";
import Navigation from "./components/navigation/navigation.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ProductPage from "./pages/productpage/productpage.component";
import Cartpage from "./pages/cartpage/cartpage.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
import CheckoutPage from "./pages/checkoutpage/checkout-page.component";
import Payment from "./pages/paymentmethod/payment.component";
import OrderPage from "./pages/orderpage/orderpage.component";
import UserProfile from "./pages/user-profile/user-profile.component";
import CheckOrder from "./pages/check-order/check-order.component";
import AdminPage from "./pages/admin-page/admin-page.component";
import AddObjectPage from "./pages/add-object-page/add-object-page.component";

import './app.css'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <PersistGate persistor={persistor}>
                <Theme>
                    <div className="app">
                        <Navigation isdark={false}/>
                        <div className={'main-content'}>
                            <Header/>
                            <Route exact path={'/'} component={HomePage}/>
                            <Route exact path={'/products/:keyword'} component={HomePage}/>
                            <Route exact path={'/product/:id'} component={ProductPage}/>
                            <Route exact path={'/cart'} component={Cartpage}/>
                            <Route exact path={'/login'} component={SignInPage}/>
                            <Route exact path={'/register'} component={SignUpPage}/>
                            <Route exact path={'/checkout'} component={CheckoutPage}/>
                            <Route exact path={'/payment'} component={Payment}/>
                            <Route exact path={'/confirmorder'} component={OrderPage}/>
                            <Route exact path={'/profile'} component={UserProfile}/>
                            <Route exact path={'/order/:id'} component={CheckOrder}/>
                            <Route exact path={'/admin'} component={AdminPage}/>
                            <Route exact path={'/add_object'} component={AddObjectPage}/>
                        </div>
                    </div>
                </Theme>
                </PersistGate>
            </Router>
        </Provider>
    );
}

export default App;
