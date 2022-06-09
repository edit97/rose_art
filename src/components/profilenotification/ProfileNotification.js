import style from './profileNotification.module.scss'
import NotificationCard from "../uiItem/cards/notificationcard/NotificationCard";


function ProfileNotification() {
    return <div className={style.notification}>
        <div className={style.title}>
            Notification
        </div>
        <div className={style.information}>
            <NotificationCard/>
            <NotificationCard/>
        </div>
    </div>

}export default ProfileNotification


