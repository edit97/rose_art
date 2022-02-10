import React, {useState} from "react";
import {Bitmap,Man,Search,Menu,BitmapWhite } from "../../assets/imeges";
import stayle from "./header.module.scss";

function  Header() {
    const [click, setClick] = useState(false);
    const handleClick =(event)=> {
        event.preventDefault();
        setClick(!click);
    };
return <div className={stayle.headerWrapper}>
    <div className={stayle.header}>
    <div className={stayle.head}>
        <div className={stayle.whiteLogo}><img src={BitmapWhite} /></div>
        <div className={stayle.logo}><img src={Bitmap} /></div>
        <div className={stayle.text}>
            <div>Главный</div>
            <div>О нас</div>
            <div>Контакт</div>
            <div>Продукт</div>
            <div>Перевозки</div>
        </div>
    </div>
    <div className={stayle.search}>
        <div className={stayle.searchlogo}><Search/></div>Поиск <span> | </span>
        <div className={stayle.searchlogo}> <Man/></div>Boйти <span> | </span>
        <div>Корзина </div> <span className={stayle.productCount}>0</span>
    </div>
    <button onClick={handleClick} className={stayle.burgerMenu}><Menu/>
    </button>
</div>
    {click && <div className={stayle.menu}>
        <div className={stayle.dropdown}>
        <div>Главный</div>
        <div>О нас</div>
        <div>Контакт</div>
        <div>Продукт</div>
        <div>Перевозки</div>
        <div><Search/> Поиск</div>
        <div><Man/>Boйти</div>
        <div>Корзина</div>
    </div>
    </div>}
</div>
}
export default Header