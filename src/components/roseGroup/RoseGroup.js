import RoseCard from "../uiItem/cards/rosecard/RoseCard";
import style from './roseGroup.module.scss';

function RoseGroup(props){
    return  <div className={style.group}>
        <div className={style.topPart}>
            <RoseCard />
            <RoseCard isSquare={true}/>
        </div>
        <div className={style.bottomPart}>
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