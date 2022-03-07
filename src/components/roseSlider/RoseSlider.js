import style from "../offer/offer.module.scss";
import {Group, Rosers, See} from "../../assets/imeges";


function RoseSlider(){
    return  <div className={style.firstRose}>
        {/*
            todo
             պետք է լինի առանձին կոմպոնենտ
            */}
        <img src={Rosers} alt=""/>
        <div className={style.txt}>
            <div className={style.text}>
                <span>26 октября 2021 г</span>
                <span className={style.work}>Фотоотчет о ходе</span>
                <div className={style.seeBtn}>посмотреть<See/></div>
            </div>
            <div className={style.icon}>
                <Group/>
            </div>
        </div>
    </div>
} export default RoseSlider