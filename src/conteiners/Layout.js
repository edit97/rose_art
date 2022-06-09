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
import {
    getProducts,
    getSlider,
    subscribeUser,
    contactsUser,
    usersSignUp,
    signIn,
    usersActivation, logOut, userProfile, usersUpdate, getFavorite,
} from "../redux/action";
import {getPropsFromState} from "../redux/mapStateToProps";
import {connect} from "react-redux";
import {useEffect} from "react";
import Profile from "./profile/Profile";


function Layout({products, getProducts,getSlider,
                    sliders,subscribeUser,contactsUser, usersSignUp,signIn,usersActivation ,
                    isLoggedIn,logOut,user,userError,userProfile, getFavorite,favorites}) {

    useEffect(() => {
        getProducts()
        getSlider()
        getFavorite()
    },[])

    let location = useLocation();
    const shouFooter = (location.pathname !== "/signIn" && location.pathname !== "/signup" &&
        location.pathname !== "/forgotPassword" && location.pathname !== "/confirm" && location.pathname !== "/profile" )
    return (
        <div className={style.layout}>
            <Header isLoggedIn={isLoggedIn}/>
            <Routes>
                <Route path={"/"} element={<Homepage products={products}
                                                     sliders={sliders}
                                                     contactsUser={contactsUser}/>}/>
                <Route path={"/basket"} element={<Basket products={products}/>}/>
                <Route path={"/basket/order"} element={<BasketOrder/>}/>
                <Route path={"/signIn"} element={<SignIn signIn={signIn}/>}/>
                <Route path={"/signup"} element={<SignUp usersSignUp={usersSignUp}
                                                         userError={userError}/>}/>
                <Route path={"/forgotPassword"} element={<ForgotPassword/>}/>
                <Route path={"/confirm"} element={<Confirm usersActivation={usersActivation}
                                                           signIn={signIn} userProfile={userProfile}/>}/>
                <Route path={"/products"} element={<Products products={products}
                                                             favorites={favorites}/>}/>
                <Route path={"/profile"} element={<Profile isLoggedIn={isLoggedIn}
                                                           logOut={logOut}
                                                            user={user}
                                                           userProfile={userProfile}/>}/>
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
    usersSignUp,
    signIn,
    usersActivation,
    logOut,
    userProfile,
    usersUpdate,
    getFavorite,
}

const mapStateToProps = (state) => {
    return getPropsFromState(state, [
        'products',
        'sliders',
        'subscribe',
        'contacts',
        'users',
        'signIn',
        'code',
        'isLoggedIn',
        'user',
        'userError',
        'update',
        'favorites'
    ])
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
