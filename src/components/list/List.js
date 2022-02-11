import {Rose1,Rose2,Rose3,Rose4,Sale,Heart,Basket,New} from "../../assets/imeges";
import style from "./list.module.scss"
import React, { Component } from "react";
import Slider from "react-slick";

export default class List extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,
        };
        return (
            <div className={style.list}>
                <h2>Новая коллекция</h2>
                <div className={style.slider}>
                <Slider {...settings}>
                        <div className={style.rose}>
                            <div className={style.product}>
                            <Rose1/>
                            <p>Классический букет Голландская
                                красных роз</p>
                            <span>13900 ֏<Sale/></span>
                            </div>
                            <div className={style.icons}>
                                <span><Heart/> любимый</span>
                                <span><Basket/> в корзину</span>
                            </div>
                        </div>
                        <div className={style.rose}>
                            <div className={style.product}>
                            <Rose2/>
                            <p>Классический букет Голландская
                                красных роз</p>
                            <span>246000֏ </span>
                        </div>
                            <div className={style.icons}>
                                <span><Heart/> любимый</span>
                                <span><Basket/> в корзину</span>
                            </div>
                        </div>
                        <div className={style.rose}>
                            <div className={style.product}>
                            <Rose3/>
                            <p>Классический букет Голландская
                                красных роз</p>
                            <span>246000֏ </span>
                            </div>
                            <div className={style.icons}>
                                <span><Heart/> любимый</span>
                                <span><Basket/> в корзину</span>
                            </div>
                        </div>
                        <div className={style.rose}>
                            <div className={style.product}>
                            <Rose4/>
                            <p>Классический букет Голландская
                                красных роз</p>
                            <span>246000֏ </span>
                            </div>
                            <div className={style.icons}>
                                <span><Heart/> любимый</span>
                                <span><Basket/> в корзину</span>
                            </div>
                        </div>
                        <div className={style.rose}>
                            <div className={style.product}>
                            <Rose2/>
                            <p>Классический букет Голландская
                                красных роз</p>
                            <span>246000֏ </span>
                            </div>
                            <div className={style.icons}>
                                <span><Heart/> любимый </span>
                                <span><Basket/> в корзину </span>
                            </div>
                        </div>
                </Slider>
                </div>
            </div>
        );
    }
}
