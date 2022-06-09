import style from "./favorite.module.scss"
import FavoriteProductCard from "../uiItem/cards/favoriteProductCard/FavoriteProductCard";
import React, {useEffect} from "react";
import {getPropsFromState} from "../../redux/mapStateToProps";
import {connect} from "react-redux";
import {getFavorite, postFavorite, removeFavorite} from "../../redux/action";

function Favorite({removeFavorite,getFavorite,favorites}) {
    useEffect(() => {
        getFavorite()
    },[])
    return <div className={style.favorite}>
        <div className={style.title}>
            Favorite
        </div>
        <div className={style.productFavorite}>
            {favorites?.elected?.map((item) => {
                return <div className={style.productsCardBlock} key={item.id}>
                    <FavoriteProductCard data={item}
                                         removeFavorite={removeFavorite}/>
                </div>
            })}
        </div>
    </div>

}

const mapDispatchToProps = {
    getFavorite,
    postFavorite,
    removeFavorite,
}
const mapStateToProps = (state) => {
    return getPropsFromState(state,[
        'favorites',
    ])
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);