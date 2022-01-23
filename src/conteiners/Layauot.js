import Header from '../components/header/Header';
import Homepage from "./homepage/Homepage";
import Navbar from "../components/navbar/Navbar";
import stayle from "./layauot.module.css"

function   Layauot () {
    return <div className={stayle.head}>
        <Header/>
        <Homepage/>
        <Navbar/>
    </div>
}
export default Layauot;
