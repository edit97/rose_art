import React, {useState} from "react";
import {Man, Search, Menu, BitmapWhite, IconMan, RoseLogo} from "../../assets/imeges";
import style from "./header.module.scss";
import { NavLink} from "react-router-dom";


function  Header({isLoggedIn}) {
    const [click, setClick] = useState(false);
    const handleClick =(event)=> {
        event.preventDefault();
        setClick(!click);
    };
    console.log(isLoggedIn,'rrrrrrs')
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
        <div className={style.search}><Search title={''}/>Поиск </div><span> | </span>
        {isLoggedIn ?
            <NavLink to="/profile" className={style.signInLink} >
                <div > <IconMan title={''}/>Профиль </div>
            </NavLink> :
            <NavLink to="/signIn" className={style.signInLink} >
                <div > <IconMan title={''}/>Boйти </div>
            </NavLink>

        }
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
    {click && <div  className={style.menu}>
        <div className={style.overlay}/>
        <div className={style.dropdown}>
            <NavLink to={"/"} className={style.headerLink}>
                <div className={style.headerPage}>Главный</div>
            </NavLink>
        <div>О нас</div>
        <div>Контакт</div>
            <NavLink to={"/products"} className={style.headerLink}>
                <div>Продукт</div>
            </NavLink>
        <div>Перевозки</div>
        <div ><Search title={''}/> Поиск</div>
            <NavLink to={"/signIn"} className={style.signinNavLink}>
                <div  className={style.color}><Man title={''}/>Boйти</div>
            </NavLink>
            <NavLink to="/profile" className={style.basketNavLink} >
                <div className={style.basketPage}> <IconMan title={''}/>Профиль </div>
            </NavLink>
            <NavLink to={"/basket"}  className={style.basketNavLink}>
                <div className={style.basketPage}>Корзина</div>
            </NavLink>
    </div>
    </div>}
</div>
}
export default Header