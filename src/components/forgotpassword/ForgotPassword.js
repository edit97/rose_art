import style from './forgotpassword.module.scss'
import { RoseLogo} from "../../assets/imeges";
import {NavLink, Link} from "react-router-dom";
import {useState} from "react";

function ForgotPassword () {
    const [email,setEmail]=useState({
        email:"",
    })
    /*todo Փոխել ֆունկցիաների անունները*/
  function edit(event){
        setEmail({
            ...email,
            [event.target.name]:event.target.value
        })
  }
    return <div className={style.forgotPassword}>
        <div className={style.logo}><RoseLogo title={''}/></div>
        <div className={style.forgotPasswordBlok}>
            <div className={style.forgotPasswordGroup}>
                <div className={style.title}>Forgot password</div>
                <div className={style.libe}>Enter your email. Email: Your Password.to restore</div>
                <input type="email"
                       value={email.email}
                       name={'email'}
                       onChange={(event) => {edit(event)}}
                       placeholder={'Enter your email'}
                       className={style.emailInput}/>
                <Link to={"/confirm"}>
                    <button className={style.btnForgotPassword}>Send</button>
                </Link>
            </div>
        </div>
        <div className={style.accountText}>Don't have an account yet?
            <NavLink to={"/signin"}>
                <span>Create an account</span>
            </NavLink>
        </div>
    </div>
}export  default ForgotPassword