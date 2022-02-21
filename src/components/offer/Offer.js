import {Rosers,Rosers1,Rosers2,Rosers3,Group} from "../../assets/imeges";
import style from "./offer.module.scss";

function Offer(){
    return <div className={style.offer}>
        <h1 className={style.title}>Лучшее предложение</h1>
        <div className={style.list}>
        <div className={style.firstRose}>
            <img src={Rosers} alt=""/>
            <div className={style.txt}>
                <div className={style.text}>
                    <span>26 октября 2021 г</span>
                    <span className={style.work}>Фотоотчет о ходе</span>
                    <div className={style.seeBtn}>посмотреть></div>
                </div>
                <div className={style.icon}>
                    <Group/>
                </div>
            </div>
        </div>
        <div className={style.group}>
            <div className={style.blok}>
                <div className={style.rosers}>
                    <img src={Rosers1} alt=""/>
                    <div className={style.text}>
                        <span>дружелюбно</span>
                        <span className={style.work}>Фотоотчет о ходе</span>
                        <div className={style.btn}>посмотреть></div>
                    </div>
                </div>
                <div className={style.rose}>
                    <img src={Rosers2} alt=""/>
                    <div className={style.text}>
                        <span>дружелюбно</span>
                        <span className={style.work}>Фотоотчет о ходе</span>
                        <div className={style.btn}>посмотреть></div>
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
                            <div className={style.btn}>посмотреть ></div>
                        </div>
                </div>
            </div>
        </div>
        </div>
        <div className={style.responsivRose}>
            <img src={Rosers1} alt=""/>
            <div className={style.responsivText}>
                <span>дружелюбно</span>
                <span className={style.work}>Фотоотчет о ходе</span>
                <div className={style.responsivBtn}>посмотреть></div>
            </div>
        </div>
    </div>
}export default Offer;