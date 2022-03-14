import Header from '../components/header/Header';
import style from "./layauot.module.scss"
import Footer from "../components/footer/Footer";
import {Routes,Route} from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Basket from "./basket/Basket";
import BasketOrder from "./basket/basketOrder/BasketOrder";

function   Layauot () {
    return (
    <div className={style.layauot}>
        <Header/>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/basket"} element={<Basket/>}/>
                <Route path={"/order"} element={<BasketOrder/>}/>
            </Routes>
        <Footer/>
    </div>
    )
}
export default Layauot;
