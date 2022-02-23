import Header from '../components/header/Header';
import style from "./layauot.module.scss"
import Main from "../components/main/Main";
import List from "../components/list/List";
import Offer from "../components/offer/Offer";
import Contact from "../components/contact/Contact";

function   Layauot () {
    return <div className={style.layauot}>
        <Header/>
        <Main/>
        <List/>
        <Offer/>
        <Contact/>
    </div>
}
export default Layauot;
