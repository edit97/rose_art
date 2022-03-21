import style from './totalCard.module.scss'
import {Delete, Minuse, Pluse, Rose2} from "../../../../assets/imeges";

function TotalCard() {
    return <div className={style.totalCard}>
        <div className={style.blok}>
            <div className={style.rose}>
                <Rose2 title={''}/>
                <div className={style.text}>Stick Up Cam Plug-In 13900֏ <span>1200֏</span></div>
            </div>
            <div className={style.delet}>
                <div className={style.number}>
                    <Minuse title={''}/><span>2</span><Pluse title={''}/>
                </div>
                <div className={style.price}>13900֏ </div>
                <div className={style.icon}><Delete title={''}/></div>
            </div>
        </div>
    </div>
} export default TotalCard