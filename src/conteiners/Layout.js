import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom";
import style from "./layauot.module.scss"

import Footer from "../components/footer/Footer";
import Header from '../components/header/Header';
import Homepage from "./homepage/Homepage";
import Basket from "./basket/Basket";
import BasketOrder from "./basket/basketOrder/BasketOrder";
import SignIn from "./signIn/SignIn";
import SignUp from "./signup/SignUp";
import ForgotPassword from "./forgotpassword/ForgotPassword";
import Confirm from "./confirm/Confirm";
import Products from "./products/Products";
import {getProducts,getSlider,subscribeUser,contactsUser} from "../redux/action";
import {getPropsFromState} from "../redux/mapStateToProps";
import {connect} from "react-redux";
import {useEffect} from "react";

function Layout({products, getProducts,getSlider,sliders,subscribeUser,contactsUser }) {
    useEffect(() => {
        getProducts()
        getSlider()
    },[])

    let location = useLocation();
    const shouFooter = (location.pathname !== "/signIn" && location.pathname !== "/signup" && location.pathname !== "/forgotPassword" && location.pathname !== "/confirm")
    return (
        <div className={style.layout}>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Homepage products={products}
                                                     sliders={sliders}
                                                     contactsUser={contactsUser}
                />}/>
                <Route path={"/basket"} element={<Basket/>}/>
                <Route path={"/basket/order"} element={<BasketOrder/>}/>
                <Route path={"/signIn"} element={<SignIn/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/forgotPassword"} element={<ForgotPassword/>}/>
                <Route path={"/confirm"} element={<Confirm/>}/>
                <Route path={"/products"} element={<Products products={products}/>}/>
            </Routes>
            {shouFooter && <Footer subscribeUser={subscribeUser}/>}
        </div>
    )

}

const mapDispatchToProps  = {
    getProducts,
    getSlider,
    subscribeUser,
    contactsUser,
}

const mapStateToProps = (state) => {
    return getPropsFromState(state, [
        'products',
        'sliders',
        'subscribe',
        'contacts'
    ])
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
