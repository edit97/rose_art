import {Routes,Route} from "react-router-dom";
import style from "./homepage.module.css";
import {Basket} from "../../components/products/Basket";


function Homepage() {
    return (
    <div className={style.homepage}>
    <Routes>
        <Route path="/basket" element={<Basket/>}/>
    </Routes>
    </div>
    )
}
export default Homepage;

