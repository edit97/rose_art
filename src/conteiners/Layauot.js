import Header from '../components/header/Header';
import { Routes,Route, Link} from 'react-router-dom';
import style from "./layauot.module.scss"
import Main from "../components/main/Main";
import List from "../components/list/List";
import Offer from "../components/offer/Offer";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
// import Products from "../components/products/Basket"

/*
* todo
*  container-ի մեջ պետքե գրել առանձին էջերը
*  component-ում էջի հատվածներ
*  կոմպոնենտները դասավորել ճիշտ folder-ներում
*  homepage-ի ուղել հիմա դատարկա
* */
function   Layauot () {
    return (
    <div className={style.layauot}>
        <Header/>
        <Main/>
        <List/>
        <Offer/>
        <Contact/>
        {/*<Products/>*/}
        <Footer/>
    </div>
    )
}
export default Layauot;
