import {Rose1,Rose2,Rose3,Rose4,Heart,Basket } from "../../../assets/imeges";
import style from "./productList.module.scss"
import React from "react";
import Slider from "react-slick"
import ProductCard from "../../../components/uiItem/cards/productcard/ProductCard";

/*
* todo
*  1․ փոխել կոմպոնենտի անունը -ի
*  2․ առանձնացնել ProductCard-ը
* */
function ProductList() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 2400,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1524,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    infinite: window.innerWidth < 1050,
                    centerMode: window.innerWidth < 1050,
                    centerPadding: ' 60px 0 0',
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    infinite: window.innerWidth < 1050,
                    centerMode: window.innerWidth < 1050,
                    centerPadding: ' 60px 0 0',
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    infinite: window.innerWidth < 1050,
                    centerMode: window.innerWidth < 1050,
                    centerPadding: ' 120px 0 0',
                    // centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: window.innerWidth < 1050,
                    centerMode: window.innerWidth < 1050,
                    centerPadding: ' 60px 0 0',
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };
    return <div className={style.list}>
        <div className={style.header}>
            <h1>Новая коллекция</h1>
            <div className={style.more}>Больше</div>
        </div>

        <div className={style.slider}>
            <Slider {...settings} >
                <ProductCard/>

                <ProductCard/>

                <ProductCard/>

                <ProductCard/>

                <ProductCard/>
                <ProductCard/>

                <ProductCard/>
            </Slider>
        </div>
    </div>
}
export default ProductList

