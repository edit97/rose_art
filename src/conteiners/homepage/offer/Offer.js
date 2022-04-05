import {Rosers1, ArrowRight} from "../../../assets/imeges";
import style from "./offer.module.scss";
import RoseSlider from "../../../components/roseSlider/RoseSlider";
import RoseGroup from "../../../components/roseGroup/RoseGroup";
import RoseCard from "../../../components/uiItem/cards/rosecard/RoseCard";

function Offer() {
    return <div className={style.offer}>
        <h1 className={style.title}>Лучшее предложение</h1>
        <div className={style.list}>
            <RoseSlider/>
            <RoseGroup/>
        </div>
        {/*
        todo
         օգտագործել RoseCard կոմպոնենտը
        */}
        <div className={style.responsiveRose}>
            <img src={Rosers1} alt=""/>
            <div className={style.responsiveText}>
                <span>дружелюбно</span>
                <span className={style.work}>Фотоотчет о ходе</span>
                <div className={style.responsiveBtn}>посмотреть<ArrowRight/></div>
            </div>
        </div>
        {/*<RoseCard className={"hello"}/>*/}
    </div>
}export default Offer