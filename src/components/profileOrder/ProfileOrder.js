import style from './profileOrder.module.scss'
import OrderCard from "../uiItem/cards/ordercard/OrderCard";

function ProfileOrder() {
    return <div className={style.order}>
        <div className={style.title}>
            Order
        </div>
        <div className={style.menu}>
            <ul className={style.navBar}>
                <li>All</li>
                <li>New</li>
                <li>Approved</li>
                <li>Completed</li>
                <li>Canceled</li>
                <li>Rejected</li>
            </ul>
        </div>
        <div className={style.orderHistory}>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
        </div>
    </div>

}export default ProfileOrder