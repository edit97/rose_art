import style from "./favorite.module.scss"
import FavoriteProductCard from "../uiItem/cards/favoriteProductCard/FavoriteProductCard";
import React, {useEffect} from "react";
import {getPropsFromState} from "../../redux/mapStateToProps";
import {connect} from "react-redux";
import {getFavorite} from "../../redux/action";

function Favorite({getFavorite,favorites}) {
    useEffect(() => {
        getFavorite()
    },[])
    // console.log(favorites,"XXXXX")
    return <div className={style.favorite}>
        <div className={style.title}>
            Favorite
        </div>
        <div className={style.productFavorite}>
            {favorites?.map((item) => {
                return <div className={style.productsCardBlock} key={item.id}>
                    <FavoriteProductCard data={item}/>
                </div>
            })}
        </div>
    </div>

}

const mapDispatchToProps = {
    getFavorite,
}
const mapStateToProps = (state) => {
    return getPropsFromState(state,[
        'favorites',
    ])
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);