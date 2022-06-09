import style from "./FavoriteProductCard.module.scss"
import {Basket, BasketWhite, Heart} from "../../../.././assets/imeges/index"
import {generateMemberMediaUrl} from "../../../../utils/generateMediaUrl";

function FavoriteProductCard({data}){
    let prices  = data?.oldPrice - data?.price
    let percent = (prices * 100) / data?.oldPrice

    return <div className={style.favoriteProductCard}>
        <div className={style.block}>
            <div className={style.rose}>
                <img src={generateMemberMediaUrl(data?.mediaMain?.path)} alt=""/>
            </div>
            <div className={style.text}>
                <div className={style.aniText}>{data?.title}</div>
                <div>
                    <span className={`${data?.oldPrice===undefined ? style.price : style.oldPrice}`}>{data?.price}֏</span>
                    {data?.oldPrice === undefined ? "" : <span className={style.price2}>{data?.oldPrice} ֏</span>}
                    {data?.oldPrice === undefined ? "" : <span className={style.sale}>-{Math.floor(percent)}%</span>}
                </div>
            </div>
        </div>
        <div className={style.favBlock}>
            <div className={style.heart}><Heart title={''}/></div>
            <button className={style.btn}><BasketWhite title={''}/> в корзину</button>
        </div>
    </div>
}export default FavoriteProductCard