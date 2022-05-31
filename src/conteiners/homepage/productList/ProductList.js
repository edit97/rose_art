import style from "./productList.module.scss"
import React from "react";
import Slider from "react-slick"
import ProductCard from "../../../components/uiItem/cards/productcard/ProductCard";
import { useNavigate } from 'react-router-dom';
import FavoriteProductCard from "../../../components/uiItem/cards/favoriteProductCard/FavoriteProductCard";

function ProductList({products}) {
    // console.log(!products?.isFavorite,'tttt')
   let navigate = useNavigate()
    function handleClick(){
        window.scroll(0,0)
        navigate("/products")
    }
    const settings = {
        dots: false,
        arrows:false,
        autoplay:true,
        slidesToScroll: 1,
        infinite:false,
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
                    infinite: window.innerWidth < 1050,
                    centerMode: window.innerWidth < 1050,
                    centerPadding: ' 40px 0 0',
                }
            },
            {
                breakpoint: 1488,
                settings: {
                    slidesToShow: 5,
                    infinite: window.innerWidth < 1050,
                    centerMode: window.innerWidth < 1050,
                    centerPadding: ' 20px 0 0',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    infinite: window.innerWidth < 1050,
                    centerMode: window.innerWidth < 1050,
                    centerPadding: ' 20px 0 0',
                }
            },
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 4,
                    infinite: window.innerWidth < 1050,
                    centerMode: window.innerWidth < 1050,
                    centerPadding: ' 10px 0 0',
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 3,
                    infinite: window.innerWidth < 1050,
                    centerMode: window.innerWidth < 1050,
                    centerPadding: ' 24px 0 0',
                }
            },
            {
                breakpoint: 694,
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
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: window.innerWidth < 1050,
                    centerMode: window.innerWidth < 1050,
                    centerPadding: ' 80px 0 0',
                }
            },
            {
                breakpoint: 406,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };
    return <div className={style.list}>
        {products?.items?.length !== 0 ?
            <>
                <div className={style.header}>
                    <h1 className={style.heavyTitle}>Новая коллекция</h1>
                    <button onClick={handleClick} className={style.more}>Больше</button>
                </div>


                <div className={style.slider}>
                    <Slider {...settings} >
                        {products?.items?.map((item) => {
                            return <div className={style.productsCardBlock} key={item.id}>
                                <ProductCard data={item}/>
                                 {/*<FavoriteProductCard data={item}/>*/}

                            </div>
                        })}
                    </Slider>
                </div>
            </> : ""}
    </div>
}
export default ProductList

