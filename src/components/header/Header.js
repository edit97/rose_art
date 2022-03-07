import React, {useState} from "react";
import {Bitmap,Man,Search,Menu,BitmapWhite,IconMan } from "../../assets/imeges";
import style from "./header.module.scss";
import {Link} from "react-router-dom";

function  Header() {
    const [click, setClick] = useState(false);
    const handleClick =(event)=> {
        event.preventDefault();
        setClick(!click);
    };
return <div className={style.headerWrapper}>
    <div className={style.header}>
    <div className={style.navigation}>
        <Link to={"/"}>
            <div className={style.whiteLogo}><img src={BitmapWhite} /></div>
            <div className={style.logo}><img src={Bitmap} /></div>
        </Link>
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
                    <span> | </span>-ը div-ից դւրս դնել style-երը ուղել
                    icon-ները նույն չափով դնել
                    սթայլեր գրել className-երով, և անունները ըստ իմաստի
                     className={style.opacity} անունը overlay
                     <Man/> ուզել սև գույնով և փոխել, գույնը փոխել hover-ի ժամանակ
                */}
        <div className={style.searchLogo}><Search/>Поиск </div><span> | </span>
        <div className={style.comehLogo}> <IconMan/>Boйти </div><span> | </span>
        <Link to="/basket" >
            <span className={style.basket}>Корзина </span>
        </Link>
         <div className={style.productCount}>0</div>
        <button onClick={handleClick} ><Menu/>
        </button>
    </div>
        <button onClick={handleClick} className={style.burgerMenu}><Menu/>
        </button>
</div>
    {click && <div className={style.menu}>
        <div className={style.overlay}></div>
        <div className={style.dropdown}>
            <Link to={"/"}>
                <div>Главный</div>
            </Link>
        <div>О нас</div>
        <div>Контакт</div>
        <div>Продукт</div>
        <div>Перевозки</div>
        <div className={style.search}><Search/> Поиск</div>
        <div className={style.manicon}><Man/>Boйти</div>
            <Link to={"/basket"}>
                <div>Корзина</div>
            </Link>
    </div>
    </div>}
</div>
}
export default Header