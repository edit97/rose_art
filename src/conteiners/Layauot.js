import Header from '../components/header/Header';
import { Routes,Route, Link} from 'react-router-dom';
import style from "./layauot.module.scss"
import Main from "../components/main/Main";
import List from "../components/list/List";
import Offer from "../components/offer/Offer";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";


function   Layauot () {
    return (
    <div className={style.layauot}>
        <Header/>
        <Main/>
        <List/>
        <Offer/>
        <Contact/>
        <Footer/>
    </div>
    )
}
export default Layauot;
