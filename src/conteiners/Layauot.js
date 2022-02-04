import Header from '../components/header/Header';
import stayle from "./layauot.module.scss"
import Main from "../components/main/Main";

function   Layauot () {
    return <div className={stayle.layauot}>
        <Header/>
        <Main/>
    </div>
}
export default Layauot;
