import style from "./homepage.module.css";
import ProductList from "../../components/productList/ProductList";
import Main from "../../components/main/Main";
import Offer from "../../components/offer/Offer";
import Contact from "../../components/contact/Contact";


function Homepage() {
    return (
    <div className={style.homepage}>
        <Main/>
        <ProductList/>
        <Offer/>
        <Contact/>
    </div>
    )
}
export default Homepage;

