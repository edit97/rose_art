import {ArrowRight, Rosers1} from "../../../../assets/imeges";
import style from './roseCard.module.scss'


function RoseCard(props) {
        return <div className={`${style.roseCard} ${style[props.className]} ${props.isBig ? style.roseCardNew : ""}`}>
            <div className={style.rosersCardContent}>
                <img src={Rosers1} alt=""/>
                <div className={style.text}>
                    <span>дружелюбно</span>
                    <span  className={style.work}>Фотоотчет о ходе</span>
                    <div className={style.btn}>посмотреть<ArrowRight title={''}/></div>
                </div>
            </div>
        </div>
} export default RoseCard