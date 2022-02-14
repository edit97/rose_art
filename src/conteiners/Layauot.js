import Header from '../components/header/Header';
import style from "./layauot.module.scss"
import Main from "../components/main/Main";
import List from "../components/list/List";

function   Layauot () {
    return <div className={style.layauot}>
        <Header/>
        <Main/>
        {/*<List/>*/}
    </div>
}
export default Layauot;
