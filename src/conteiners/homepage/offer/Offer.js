import {Rosers,Rosers1,Rosers2,Rosers3,Group,See} from "../../../assets/imeges";
import style from "./offer.module.scss";
import RoseSlider from "../../../components/roseSlider/RoseSlider";
import RoseGroup from "../../../components/roseGroup/RoseGroup";

function Offer(){
    return <div className={style.offer}>
        <h1 className={style.title}>Лучшее предложение</h1>
                <div className={style.list}>
                    <RoseSlider/>
                    <RoseGroup/>
            </div>
        <div className={style.responsivRose}>
            <img src={Rosers1} alt=""/>
            <div className={style.responsivText}>
                <span>дружелюбно</span>
                <span className={style.work}>Фотоотчет о ходе</span>
                <div className={style.responsivBtn}>посмотреть<See/></div>
            </div>
        </div>
    </div>
}export default Offer