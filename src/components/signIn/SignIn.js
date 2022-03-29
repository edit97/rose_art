import style from './signin.module.scss'
import {RoseLogo, FacebookIcon, Google} from "../../assets/imeges";
import {Link, NavLink} from "react-router-dom";
import { useState} from "react";


function SignIn(){

    const [user, setUser]=useState({
        email:"",
        password:"",
    })

    function edit( event) {
        console.log('name')
        setUser({
            ...user,
        [event]: event.target.name.value
        });
    }


    return <div className={style.signin}>
            <div className={style.logo}><RoseLogo/></div>
            <div className={style.signinBlok}>
                <div className={style.signingroup}>
                <div className={style.title}>Welcome </div>
                <div className={style.libe}>Enter your credentials to access your account</div>
                <input type="email"
                       value={user.email}
                       name={'email'}
                       onChange={(event) => {edit(event)}}
                       placeholder={'Enter your email'}
                       className={style.emailInput}/>
                    <div className={style.passwordBlok }>
                        <input type="password"
                               value={user.password}
                               onChange={(event) => {edit('password',event)}}
                               placeholder={'Enter your password'}
                               className={style.passwordInput}/>
                        {/*<WatchIcon onClick={() =>  />*/}
                    </div>
                    <NavLink to={"/forgotpassword"} className={style.forgotPasswordLink}>
                        <div className={style.text}>Forgot password?</div>
                    </NavLink>
                <button className={style.btnSignIn}>Sign in</button>
                <button className={style.btnGoogle}><div className={style.googletext}><Google title={''}/>Login with Google</div></button>
                <button className={style.btnFacebook}><div className={style.googletext}><FacebookIcon title={''}/>Login with Facebook</div></button>
                </div>
            </div>
        <div className={style.accountText}>Don't have an account yet?
            <NavLink to={"/signup"}>
                <span>Create an account</span>
            </NavLink>
        </div>
    </div>
}export  default SignIn