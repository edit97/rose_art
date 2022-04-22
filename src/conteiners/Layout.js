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
import Confirm from "../components/confirm/Confirm";
import Products from "../components/products/Products";

function   Layout () {
    // const [count, setCount]=useState(8)
    //
    // useEffect(() => {
    //     console.log("usEffect")
    // }, [count])
    let location = useLocation();
    const shouFooter = (location.pathname !== "/signin" && location.pathname !== "/signup" && location.pathname !== "/forgotpassword" &&location.pathname !== "/confirm")
        return (
            <div className={style.layout}>
                {/*<button onClick={() => setCount(count + 1)}>*/}
                {/*    {count}*/}
                {/*</button>*/}
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path={"/basket"} element={<Basket/> }/>
                    <Route path={"/basket/order"} element={<BasketOrder/>} />
                    <Route path={"/signIn"}  element={<SignIn/>} />
                    <Route path={"/signup"}  element={<SignUp/>}/>
                    <Route path={"/forgotPassword"}  element={<ForgotPassword/>}/>
                    <Route path={"/confirm"}  element={<Confirm/>}/>
                    <Route path={"/products"}  element={<Products/>}/>
                </Routes>
                { shouFooter && <Footer/> }
            </div>
        )
    }

export default Layout;
