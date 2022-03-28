import RoseCard from "../uiItem/cards/rosecard/RoseCard";
import style from './roseGroup.module.scss';

function RoseGroup(){

    return  <div className={style.group}>
        <div className={style.blok}>
            {/*
                    todo
                     1․ պետք է լինի առանձին կոմպոնենտ
                     2․ <See/> Փոխել ArrowRight
                  */}
            <RoseCard />
            <RoseCard isBig={true}  className={"rasCard"}/>
        </div>
        <div className={style.blok1}>
            <div className={style.saleWrapper}>
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
            </div>
            <RoseCard />
        </div>
    </div>

}export default RoseGroup