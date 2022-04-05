import style from './products.module.scss'
import {BurgerMenu, IconMenu, MapIcon, RedArr, RoseWallepaper} from "../../assets/imeges";
import ProductCard from "../uiItem/cards/productcard/ProductCard";
import Select from "../select/Select";
import Filter from "../filter/Filter";
import Sort from "../sort/Sort";

function Products () {
    return <div className={style.products}>
    <div className={style.nav}>Home  /    All rose   /  Rose spray </div>
        <div className={style.wallpaper}>
            <img src={RoseWallepaper} alt=""/>
            <div className={style.textGroup}>
                <div className={style.textTitle}>
                    Discounts and promotions
                </div>
                <div className={style.text}>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour.
                </div>
                    <button className={style.textBtn}>
                        посмотреть <RedArr title={''}/>
                    </button>
            </div>
        </div>
        <div className={style.selectGroup}>
            <Select/>
            <div className={style.filterGroup}>
                <Filter/>
                <div className={style.sortBlock}>
                   <Sort/>
                </div>
            </div>
        </div>
    </div>
}export default Products