import Header from '../components/header/Header';
import style from "./layauot.module.scss"
import Footer from "../components/footer/Footer";
import {Routes,Route,useLocation} from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Basket from "./basket/Basket";
import BasketOrder from "./basket/basketOrder/BasketOrder";
import SignIn from "../components/signIn/SignIn";
import SignUp from "../components/signup/SignUp";
import ForgotPassword from "../components/forgotpassword/ForgotPassword";
import {useEffect, useState} from "react";
import Confirm from "../components/confirm/Confirm";

function   Layauot () {
    // const [count, setCount]=useState(8)
    //
    // useEffect(() => {
    //     console.log("useEffect")
    // }, [count])
    let location = useLocation();
    const shouFooter = (location.pathname !== "/signin" && location.pathname !== "/signup" && location.pathname !== "/forgotpassword" &&location.pathname !== "/confirm")
        return (
            <div className={style.layauot}>
                {/*<button onClick={() => setCount(count + 1)}>*/}
                {/*    {count}*/}
                {/*</button>*/}
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path={"/basket"} element={<Basket/> }/>
                    <Route path={"/basket/order"} element={<BasketOrder/>} />
                    <Route path={"/signin"}  element={<SignIn/>} />
                    <Route path={"/signup"}  element={<SignUp/>}/>
                    <Route path={"/forgotpassword"}  element={<ForgotPassword/>}/>
                    <Route path={"/confirm"}  element={<Confirm/>}/>
                </Routes>
                { shouFooter && <Footer/> }
            </div>
        )
    }

export default Layauot;
