import React, {useState} from "react";
import {Bitmap,Man,Search,Menu,BitmapWhite } from "../../assets/imeges";
import style from "./header.module.scss";

function  Header() {
    const [click, setClick] = useState(false);
    const handleClick =(event)=> {
        event.preventDefault();
        setClick(!click);
    };
return <div className={style.headerWrapper}>
    <div className={style.header}>
    <div className={style.navigation}>
        <div className={style.whiteLogo}><img src={BitmapWhite} /></div>
        <div className={style.logo}><img src={Bitmap} /></div>
        <div className={style.text}>
            <div>Главный</div>
            <div>О нас</div>
            <div>Контакт</div>
            <div>Продукт</div>
            <div>Перевозки</div>
        </div>
    </div>
    <div className={style.headerActions}>
        <div className={style.searchlogo}><Search/>Поиск <span> | </span></div>
        <div className={style.searchlogo}> <Man/>Boйти <span> | </span></div>
        <span>Корзина </span> <div className={style.productCount}>0</div>
        <button onClick={handleClick} ><Menu/>
        </button>
    </div>
        <button onClick={handleClick} className={style.burgerMenu}><Menu/>
        </button>
</div>
    {click && <div className={style.menu}>
        <div className={style.opacity}></div>
        <div className={style.dropdown}>
        <div>Главный</div>
        <div>О нас</div>
        <div>Контакт</div>
        <div>Продукт</div>
        <div>Перевозки</div>
        <div className={style.search}><Search/> Поиск</div>
        <div className={style.manicon}><Man/>Boйти</div>
        <div>Корзина</div>
    </div>
    </div>}
</div>
}
export default Header