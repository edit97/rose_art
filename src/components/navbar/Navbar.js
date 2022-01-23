import {Map} from "../../assets/imeges";
import stayle from "./navbar.module.css"

function Navbar() {
    return<div className={stayle.nav}>
        <div className={stayle.map}>
            <Map title={''}/>
            <span>Yerevan,Armenia</span>
        </div>
        <div className={stayle.bar}>
            <p>Products</p>
            <p>Shippings</p>
            <p>About us</p>
            <p>Contact</p>
        </div>

    </div>

}
export default Navbar