import style from "../../../../conteiners/homepage/offer/offer.module.scss";
import {ArrowRight, Rosers1} from "../../../../assets/imeges";

function RoseCard(props) {
        return <div className={props.isBig ? style.roseGroupNew : null }>
            <div className={style.rosers}>
                <img src={Rosers1} alt=""/>
                <div className={style.text}>
                    <span>дружелюбно</span>
                    <span className={style.work}>Фотоотчет о ходе</span>
                    <div className={style.btn}>посмотреть<ArrowRight/></div>
                </div>
            </div>
        </div>
} export default RoseCard