import style from "./profile.module.scss"
import React from "react";
import { LogOut, NotificationIcon, Order, User, UserHeart} from "../../assets/imeges";
import ProfileInformation from "../../components/profileInformation/ProfileInformation";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import ProfileNotification from "../../components/profilenotification/ProfileNotification";
import Favorite from "../../components/favorite/Favorite";
import ProfileOrder from "../../components/profileOrder/ProfileOrder";

function Profile({products,logOut}) {
    let navigate=useNavigate()
    const [profile,setProfile]=useState({
        settings:true,
        favorites:false,
        order:false,
        notifications:false,
    })

    function logOutClick() {
        window.scroll(0, 0)
        navigate("/")
        logOut()
}

    function handleClick(event) {
        let val =event.target.value
        if(val==='settings' ){
            setProfile({favorites: false,settings:true,order: false,notifications: false});
        }
        if(val==='favorites'){
            setProfile({favorites: true,settings:false,order: false,notifications: false});
        }
        if(val==='order'){
            setProfile({favorites: false,settings:false,order: true,notifications: false})
        }
        if(val==='notifications'){
            setProfile({favorites: false,settings:false,order: false,notifications: true})
        }
    }

    return <div className={style.profile}>
        <div className={style.staticInfo}>
            <div className={style.userProfile}>
                <div className={style.imgProfile}>

                </div>
                <div className={style.profileInfo}>
                    <span className={style.name}>Ani Mxitaryan</span>
                    <span className={style.email}>animnacakanyan@gmail.com</span>
                </div>
            </div>
            <div className={style.list}>
                <button className={`${style.profileBlock} 
                ${profile.settings===true ? style.active : style.transparent}`}
                        onClick={handleClick}
                        value={'settings'}
                ><User/> Profile information</button>
                <button className={`${style.block} 
                ${profile.favorites===true ? style.active : style.transparent}`}
                        onClick={handleClick}
                        value={'favorites'}>
                    <UserHeart/> My favorite</button>
                <button className={`${style.block} 
                ${profile.order===true ? style.active : style.transparent}`}
                        value={'order'}
                        onClick={handleClick}>
                    <Order/> Order history</button>
                <button className={`${style.block} 
                ${profile.notifications===true ? style.active : style.transparent}`}
                        value={'notifications'}
                        onClick={handleClick}>
                    <NotificationIcon/> Notification</button>
                <button className={style.logOut} onClick={logOutClick}> <LogOut/>Log out</button>
            </div>
        </div>
        <div className={style.information}>
            {profile.settings===true? <ProfileInformation/> : ""}
            {profile.favorites===true  ? <Favorite products={products}/> : ""}
            {profile.order===true ? <ProfileOrder/> : ""}
            {profile.notifications===true ? <ProfileNotification/> : ""}
        </div>
    </div>

}export default Profile