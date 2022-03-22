import React, {useState} from "react";
import {Bitmap,Man,Search,Menu,BitmapWhite,IconMan } from "../../assets/imeges";
import style from "./header.module.scss";
import {Link, NavLink} from "react-router-dom";


function  Header() {
    const [click, setClick] = useState(false);
    const handleClick =(event)=> {
        event.preventDefault();
        setClick(!click);
    };
return <div className={style.headerWrapper}>
    <div className={style.header}>
    <div className={style.navigation}>
        <NavLink to={"/"}>
            <div className={style.responsiveLogo}><img src={BitmapWhite} /></div>
            <div className={style.logo}><img src={Bitmap} /></div>
        </NavLink>
        <div className={style.text}>
            <div>Главный</div>
            <div>О нас</div>
            <div>Контакт</div>
            <div>Продукт</div>
            <div>Перевозки</div>
        </div>
    </div>
    <div className={style.headerActions}>
        {/*todo
                    սթայլեր գրել className-երով, և անունները ըստ իմաստի
                    օրինակ searchLogo փոխել
                */}
        <div className={style.item}><Search title={''}/>Поиск </div><span> | </span>
        <div className={style.items}> <IconMan title={''}/>Boйти </div><span> | </span>
        <NavLink to="/basket">
            <span className={style.basket}>Корзина </span>
        </NavLink>
         <div className={style.productCount}>0</div>
        <button onClick={handleClick} ><Menu/>
        </button>
    </div>
        <button onClick={handleClick} className={style.burgerMenu}><Menu/>
        </button>
</div>
    {click && <div className={style.menu}>
        <div className={style.overlay}/>
        <div className={style.dropdown}>
            <NavLink to={"/"}>
                <div className={style.headerPage}>Главный</div>
            </NavLink>
        <div>О нас</div>
        <div>Контакт</div>
        <div>Продукт</div>
        <div>Перевозки</div>
        <div className={style.search}><Search title={''}/> Поиск</div>
        <div className={style.manicon}><Man title={''}/>Boйти</div>
            <NavLink to={"/basket"}
            >
                <div className={style.basketPage}>Корзина</div>
            </NavLink>
    </div>
    </div>}
</div>
}
export default Header