import {ArrowRight, Rosers1} from "../../../../assets/imeges";
import style from './roseCard.module.scss'


function RoseCard(props) {
        return <div className={`${style.roseGroup} ${style[props.className]} ${props.isBig ? style.roseGroupNew : ""}`}>
            <div className={style.rosers}>
                <img src={Rosers1} alt=""/>
                <div className={style.text}>
                    <span>дружелюбно</span>
                    <span  className={style.work}>Фотоотчет о ходе</span>
                    <div className={style.btn}>посмотреть<ArrowRight/></div>
                </div>
            </div>
        </div>
} export default RoseCard