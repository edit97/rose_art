import {Rose1,Rose2,Rose3,Rose4,Heart,Basket } from "../../../assets/imeges";
import style from "./productList.module.scss"
import React from "react";
import Slider from "react-slick"
import ProductCard from "../../../components/uiItem/cards/productcard/ProductCard";

function ProductList({products}) {
    const settings = {
        dots: false,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
    };
    return <div className={style.list}>
        {products.items.length !== 0 ?
            <>
                <div className={style.header}>
                    <h1 className={style.heavyTitle}>Новая коллекция</h1>
                    <div className={style.more}>Больше</div>
                </div>

                <div className={style.slider}>
                    <Slider {...settings} >
                        {products.items?.map((item) => {
                            return <ProductCard key={item.id}
                                                data={item}
                            />
                        })}
                    </Slider>
                </div>
            </> : ""
        }
    </div>
}
export default ProductList

