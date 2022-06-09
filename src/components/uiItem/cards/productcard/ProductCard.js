import style from "./productCard.module.scss"
import {Basket, Heart, RedHeart, UserHeart} from "../../../../assets/imeges";
import React from "react";
import {generateMemberMediaUrl} from "../../../../utils/generateMediaUrl";
import {postFavorite, removeFavorite} from "../../../../redux/action";
import {connect} from "react-redux";
import {getPropsFromState} from "../../../../redux/mapStateToProps";
import {useEffect} from "react";

function ProductCard({data,postFavorite,removeFavorite}){
    // console.log(data,"UUUUUU")
    //
    let prices  = data?.oldPrice - data?.price
    let percent = (prices * 100) / data?.oldPrice
    return <div className={style.productCard}>
        <div className={style.block}>
            {data?.isFavorite ?
                <button className={style.heart} onClick={() => removeFavorite(data?.id)}>
                    <RedHeart title={''}/>
                </button> :
                <button className={style.heart} onClick={() => postFavorite(data?.id)}>
                    <UserHeart title={''}/>
                </button>
            }
            <div className={style.rose}>
                <img src={generateMemberMediaUrl(data?.mediaMain?.path)} alt=""/>
            </div>
            <div className={style.text}>
                <div className={style.aniText}>{data?.title}</div>
                <div>
                    <span className={`${data?.oldPrice===undefined ? style.price : style.oldPrice}`}>{data?.price}֏</span>
                    {data?.oldPrice === undefined ? "" : <span className={style.price2}>{data?.oldPrice} ֏</span>}
                    {data?.oldPrice === undefined ? "" : <span className={style.sale}>-{Math.floor(percent)}%</span>}
                </div>
            </div>
            <button className={style.btn}><Basket title={''}/> в корзину</button>
        </div>
    </div>


}
const mapDispatchToProps = {
    postFavorite,
    removeFavorite,
};

const mapStateToProps = (state) => {
    return getPropsFromState(state, [

    ])
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);