import style from "./FavoriteProductCard.module.scss"
import {Basket, BasketWhite, RedHeart} from "../../../.././assets/imeges/index"
import {generateMemberMediaUrl} from "../../../../utils/generateMediaUrl";
import React from "react";

function FavoriteProductCard({data,removeFavorite}){
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
                <button className={style.heart} onClick={() => removeFavorite(data?.id)}>
                    <RedHeart title={''}/>
                </button>
            <button className={style.btn}><BasketWhite title={''}/> в корзину</button>
        </div>
    </div>
}export default FavoriteProductCard