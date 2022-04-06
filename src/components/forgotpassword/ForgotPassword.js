import style from './forgotpassword.module.scss'
import { RoseLogo} from "../../assets/imeges";
import {NavLink, Link} from "react-router-dom";
import {useState} from "react";

function ForgotPassword () {
    const [email,setEmail]=useState({
        email:"",
    })
    /*todo Փոխել ֆունկցիաների անունները*/
  function saveState(event){
        setEmail({
            ...email,
            [event.target.name]:event.target.value
        })
  }
    return <div className={style.forgotPassword}>
        <div ><RoseLogo title={''}/></div>
        <div className={style.forgotPasswordBlock}>
            <div className={style.forgotPasswordGroup}>
                <div className={style.title}>Forgot password</div>
                <div className={style.head}>Enter your email. Email: Your Password.to restore</div>
                <input type="email"
                       value={email.email}
                       name={'email'}
                       onChange={(event) => {saveState(event)}}
                       placeholder={'Enter your email'}
                       className={style.emailInput}/>
                <Link to={"/confirm"}>
                    <button className={style.btnForgotPassword}>Send</button>
                </Link>
            </div>
        </div>
        <div className={style.accountText}>Don't have an account yet?
            <NavLink to={"/signIn"}>
                <span>Create an account</span>
            </NavLink>
        </div>
    </div>
}export  default ForgotPassword