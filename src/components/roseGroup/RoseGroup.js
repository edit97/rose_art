import style from "../../conteiners/homepage/offer/offer.module.scss";
import {Rosers1, Rosers2, Rosers3, See} from "../../assets/imeges";

function RoseGroup(){
    return  <div className={style.group}>
        <div className={style.blok}>
            {/*
                    todo
                     1․ պետք է լինի առանձին կոմպոնենտ
                     2․ <See/> Փոխել ArrowRight
                  */}
            <div className={style.rosers}>
                <img src={Rosers1} alt=""/>
                <div className={style.text}>
                    <span>дружелюбно</span>
                    <span className={style.work}>Фотоотчет о ходе</span>
                    <div className={style.btn}>посмотреть<See/></div>
                </div>
            </div>
            <div className={style.rose}>
                <img src={Rosers2} alt=""/>
                <div className={style.text}>
                    <span>дружелюбно</span>
                    <span className={style.work}>Фотоотчет о ходе</span>
                    <div className={style.btn}>посмотреть<See/></div>
                </div>
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
            <div className={style.roseGroup}>
                <img src={Rosers3} alt=""/>
                <div className={style.text}>
                    <span>дружелюбно</span>
                    <span className={style.work}>Фотоотчет о ходе</span>
                    <div className={style.btn}>посмотреть<See/></div>
                </div>
            </div>
        </div>
    </div>

}export default RoseGroup