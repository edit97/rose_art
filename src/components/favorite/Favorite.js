import style from "./favorite.module.scss"
import FavoriteProductCard from "../uiItem/cards/favoriteProductCard/FavoriteProductCard";
import ProductCard from "../uiItem/cards/productcard/ProductCard";
import React from "react";

function Favorite({products}) {
    return <div className={style.favorite}>
        <div className={style.title}>
            Favorite
        </div>
        <div className={style.productFavorite}>
            {products.items?.map((item) => {
                return <div className={style.productsCardBlock} key={item.id}>
                    <FavoriteProductCard data={item}/>
                </div>
            })}
        </div>
    </div>

}export default Favorite