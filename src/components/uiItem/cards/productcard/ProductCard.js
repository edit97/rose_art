import style from "./productCard.module.scss"
import {Basket, Heart, Rose3} from "../../../../assets/imeges";
import React from "react";

function ProductCard(){
    return <div className={style.productCard}>
        <div className={style.blok}>
            <div className={style.heart}><Heart/></div>
            <div className={style.rose}><Rose3/></div>
            <div className={style.text}>
                <div>Rose pich avalanche for
                    Echo  tery Show 5 in</div>
                <div className={style.items}>
                    <span className={style.price}>13900 ֏</span>
                    <span className={style.price2}>12000 ֏</span>
                    <span className={style.sale}>-10%</span>
                </div>
            </div>
            <button className={style.btn}><Basket/> в корзину</button>
        </div>
    </div>
}export default ProductCard