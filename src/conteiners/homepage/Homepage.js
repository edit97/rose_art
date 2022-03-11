import style from "./homepage.module.css";
import ProductList from "./productList/ProductList";
import Main from "./main/Main";
import Offer from "./offer/Offer";
import Contact from "./contact/Contact";


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

