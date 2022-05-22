import style from "./productCard.module.scss"
import {Basket, Heart} from "../../../../assets/imeges";
import React, {useState} from "react";
import {generateMemberMediaUrl} from "../../../../utils/generateMediaUrl";

function ProductCard({data}){
    let prices  = data?.oldPrice - data?.price
    let percent = (prices * 100) / data?.oldPrice
    return <div className={style.productCard}>
        <div className={style.block}>
            <button className={style.heart}><Heart title={''}/></button>
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
            <button className={style.btn}><Basket title={''}/> в корзину</button>
        </div>
    </div>
}export default ProductCard