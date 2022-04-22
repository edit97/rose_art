import style from "./productCard.module.scss"
import {Basket, Heart, Rose4} from "../../../../assets/imeges";
import React from "react";

function ProductCard(){
    return <div className={style.productCard}>
        <div className={style.block}>
            <div className={style.heart}><Heart title={''}/></div>
            <div className={style.rose}><Rose4 title={''}/></div>
            <div className={style.text}>
                <div className={style.aniText}>Rose pich avalanche for
                    Echo  tery Show 5 in</div>
                <div>
                    <span className={style.price}>13900 ֏</span>
                    <span className={style.price2}>12000 ֏</span>
                    <span className={style.sale}>-10%</span>
                </div>
            </div>
            <button className={style.btn}><Basket title={''}/> в корзину</button>
        </div>
    </div>
}export default ProductCard