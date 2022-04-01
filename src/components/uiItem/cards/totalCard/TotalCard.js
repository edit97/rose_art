import style from './totalCard.module.scss'
import {Delete, Minuse, Pluse, Rose2} from "../../../../assets/imeges";

function TotalCard() {
    return <div className={style.totalCard}>
        <div className={style.blok}>
            <div className={style.rose}>
                <Rose2 title={''}/>
                <div className={style.text}>
                    <div className={style.priceText}>Stick Up Cam Plug-In </div>
                    <div className={style.priceNumberBlok}>
                        <span> 13900֏</span>
                        <span className={style.priceNumber}>1200֏</span></div>
                    </div>
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