import style from './orderCard.module.scss'

function OrderCard() {
    return <div className={style.orderCard}>
        <div className={style.orderInfo}>
            <div className={style.orderId}>
                <span className={style.text}>Order ID:</span>
                2003600595
            </div>
            <div className={style.orderId}>
                <span className={style.text}>Order monthly:</span>
                21 Jun 2020
            </div>
        </div>
        <div className={style.conditionBlock}>
            <div className={style.completed}>Completed</div>
            {/*<div className={style.rejected}>Rejected</div>*/}
            {/*<div className={style.Approved}>Completed</div>*/}
        </div>
    </div>
}export  default OrderCard