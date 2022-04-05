import React, {useState} from "react";
import {Man, Search, Menu, BitmapWhite, IconMan, RoseLogo} from "../../assets/imeges";
import style from "./header.module.scss";
import { NavLink} from "react-router-dom";


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
            <div className={style.logo}><RoseLogo title={''}/></div>
        </NavLink>
        <div className={style.text}>
            <NavLink to={"/"} className={style.headerLink}>
               <div className={style.link}> Главный </div>
            </NavLink>
            <div className={style.link}>О нас</div>
            <div className={style.link}>Контакт</div>
            <NavLink to={"/products"} className={style.productLinks}>
                <div className={style.link}> Продукт</div>
            </NavLink>
            <div className={style.link}>Перевозки</div>
        </div>
    </div>
    <div className={style.headerActions}>
        {/*todo
            1.className-երը գրել ըստ իմաստի
            2.camelCase միշտ պահել
            4.չօգտագործվող className-երը ջնջել
            5.եթե գրվածի տակ ընդգծվում է կանաչով ուրեմն բառը գրված է սխալ, ուղղել
            ուղել մնացած բոլոր կոմպոնենտներում
          */}
        <div className={style.searchItem}><Search title={''}/>Поиск </div><span> | </span>
        <NavLink to="/signIn" className={style.signInLink} >
            <div className={style.sinInItems}> <IconMan title={''}/>Boйти </div>
        </NavLink>
        <span> | </span>
        <NavLink to="/basket" className={style.basketLink} >
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
            <NavLink to={"/"} className={style.headerLink}>
                <div className={style.headerPage}>Главный</div>
            </NavLink>
        <div>О нас</div>
        <div>Контакт</div>
        <div>Продукт</div>
        <div>Перевозки</div>
        <div className={style.search}><Search title={''}/> Поиск</div>
            <NavLink to={"/signIn"} className={style.signinNavLink}>
                <div className={style.manIcon}><Man title={''}/>Boйти</div>
            </NavLink>
            <NavLink to={"/basket"}  className={style.basketNavLink}>
                <div className={style.basketPage}>Корзина</div>
            </NavLink>
    </div>
    </div>}
</div>
}
export default Header