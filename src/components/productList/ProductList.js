import {Rose1,Rose2,Rose3,Rose4,Heart,Basket } from "../../assets/imeges";
import style from "./productList.module.scss"
import React from "react";

/*
* todo
*  1․ փոխել կոմպոնենտի անունը -ի
*  2․ առանձնացնել ProductCard-ը
* */
function ProductList() {
    return <div className={style.list}>
        <div className={style.header}>
            <h1>Новая коллекция</h1>
            <div className={style.more}>Больше</div>
        </div>
        <div className={style.slider}>
            <div className={style.blok}>
               <div className={style.heart}><Heart/></div>
               <div className={style.rose}><Rose1/></div>
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

            <div className={style.blok1}>
                <div className={style.icon}>
                    <div className={style.news}>Новый</div>
                   <div className={style.heart2}> <Heart/></div>
                </div>
                <div className={style.rose}><Rose2/></div>
                <div className={style.text}>
                    <div>Rose pich avalanche for
                        Echo  tery Show 5 in</div>
                    <span className={style.price3}>246000֏ </span>
                </div>
                <button className={style.btn}><Basket/> в корзину</button>
            </div>

            <div className={style.blok2}>
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

            <div className={style.blok3}>
                <div className={style.heart}><Heart/></div>
                <div className={style.rose}><Rose4/></div>
                <div className={style.text}>
                    <div>Rose pich avalanche for
                        Echo  tery Show 5 in</div>
                    <span className={style.price3}>246000֏ </span>
                </div>
                <button className={style.btn}><Basket/> в корзину</button>
            </div>

            <div className={style.blok4}>
                <div className={style.icon}>
                    <div className={style.news}>Новый</div>
                    <div className={style.heart2}> <Heart/></div>
                </div>
                <div className={style.rose}><Rose2/></div>
                <div className={style.text}>
                    <div>Rose pich avalanche for
                        Echo  tery Show 5 in</div>
                    <span className={style.price3}>246000֏ </span>
                </div>
                <button className={style.btn}><Basket/> в корзину</button>
            </div>
        </div>
    </div>
}
export default ProductList

