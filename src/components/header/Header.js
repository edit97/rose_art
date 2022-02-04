import {Bitmap,Man,Search,Menu,BitmapWhite } from "../../assets/imeges";
import stayle from "./header.module.scss";

function  Header() {

return <div className={stayle.header}>
    <div className={stayle.head}>
        <div className={stayle.whiteLogo}><img src={BitmapWhite} /></div>
        <div className={stayle.logo}><img src={Bitmap} /></div>
            <div>Главный</div>
            <div>О нас</div>
            <div>Контакт</div>
            <div>Продукт</div>
            <div>Перевозки</div>
    </div>
    <div className={stayle.search}>
        <div><Search/> Поиск</div> <span> | </span>
        <div> <Man/>Boйти</div> <span> | </span>
        <div>Корзина </div> <span className={stayle.productCount}>0</span>
    </div>
    <div className={stayle.burgerMenu}><Menu/>
        {/*<div className={stayle.dropdown}>*/}
        {/*    <div>Главный</div>*/}
        {/*    <div>О нас</div>*/}
        {/*    <div>Контакт</div>*/}
        {/*    <div>Продукт</div>*/}
        {/*    <div>Перевозки</div>*/}
        {/*    <div><Search/> Поиск</div>*/}
        {/*    <div> <Man/>Boйти</div>*/}
        {/*    <div>Корзина </div>*/}
        {/*</div>*/}
    </div>

</div>
}
export default Header