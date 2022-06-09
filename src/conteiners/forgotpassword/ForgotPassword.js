import style from './forgotpassword.module.scss'
import { RoseLogo} from "../../assets/imeges";
import {NavLink, Link} from "react-router-dom";
import {useState} from "react";
import isEmail from "validator/es/lib/isEmail";

function ForgotPassword () {
    const [state,setState]=useState({
        email:"",
    })
    const [error,setError]=useState(false)

    function forgotPasswordClick() {
    if(isEmail(state.email)){
        setError(false)
    }else {
        setError(true)
    }
    }
  function saveState(event){

        setState({
            ...state,
            [event.target.name]:event.target.value
        })
  }
    return <div className={style.forgotPassword}>
        <NavLink to={"/"}>
            <RoseLogo title={''}/>
        </NavLink>
        <div className={style.forgotPasswordBlock}>
            <div className={style.forgotPasswordGroup}>
                <div className={style.title}>Forgot password</div>
                <div className={style.head}>Enter your email. Email: Your Password.to restore</div>
                <input type="email"
                       value={state.email}
                       name={'email'}
                       onChange={(event) => {saveState(event)}}
                       placeholder={'Enter your email'}
                       className={`${style.emailInput } ${error===false ? style.borderTransparent :  style.errorBorder}`}/>
                <button className={style.btnForgotPassword} onClick={forgotPasswordClick}>Send</button>
                {/*<Link to={"/confirm"}>*/}
                {/*    <button className={style.btnForgotPassword} onClick={forgotPasswordClick}>Send</button>*/}
                {/*</Link>*/}
            </div>
        </div>
        <div className={style.accountText}>Don't have an account yet?
            <NavLink to={"/signIn"}>
                <span>Create an account</span>
            </NavLink>
        </div>
    </div>
}export  default ForgotPassword