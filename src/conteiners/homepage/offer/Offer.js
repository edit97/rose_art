import {Rosers1, ArrowRight} from "../../../assets/imeges";
import style from "./offer.module.scss";
import RoseSlider from "../../../components/roseSlider/RoseSlider";
import RoseGroup from "../../../components/roseGroup/RoseGroup";
import RoseCard from "../../../components/uiItem/cards/rosecard/RoseCard";

function Offer({sliders}) {
    return <div className={style.offer}>
        <h1 className={style.title}>Лучшее предложение</h1>
        <div className={style.list}>
            <RoseSlider sliders={sliders}/>
            <RoseGroup/>
        </div>
        {/*
        todo
         օգտագործել RoseCard կոմպոնենտը
        */}
        <RoseCard className={"responsiveCard"}/>
    </div>
}export default Offer