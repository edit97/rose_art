import style from "../../conteiners/homepage/offer/offer.module.scss";
import {Rosers1, Rosers2, Rosers3,ArrowRight} from "../../assets/imeges";
import RoseCard from "../uiItem/cards/rosecard/RoseCard";

function RoseGroup(props){
    return  <div className={style.group}>
        <div className={style.blok}>
            {/*
                    todo
                     1․ պետք է լինի առանձին կոմպոնենտ
                     2․ <See/> Փոխել ArrowRight
                  */}
            <RoseCard/>
           <div className={style.roseItem}>
               <RoseCard />
           </div>
        </div>
        <div className={style.blok1}>
            <div className={style.sale}>
                <div className={style.saleTxt}>
                    <div>горячие скидки</div>
                    <div className={style.count}>
                        <span className={style.number}>20</span>
                        <div className={style.prsent}>
                            <div className={style.iconPrsent}>% </div>
                            <div>НА ВСЕ</div>
                        </div>
                    </div>
                    <div>Свадебние цветы</div>
                </div>
            </div>
            <RoseCard/>
        </div>
    </div>

}export default RoseGroup