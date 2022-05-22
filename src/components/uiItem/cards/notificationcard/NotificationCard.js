import  style from './notificationCard.module.scss'
import {Close, Delete} from "../../../../assets/imeges";

function NotificationCard() {
    return <div className={style.notificationCard}>
        <div className={style.informBlock}>
            <div className={style.header}>Smart directory</div>
            <div className={style.textAlert}>Dear customer, your ID. 2003600595  the transaction has been approved,
                you can see it in your order under the status approved . Thank you։
            </div>
        </div>
        <div className={style.changeBlock}>
            <button className={style.btnDelete}><Delete title={''}/></button>
            <div className={style.dateBlock}>10 min. ago</div>
        </div>
    </div>

}export default NotificationCard