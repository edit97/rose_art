import style from './forgotpassword.module.scss'
import {Bitmap} from "../../assets/imeges";
import {NavLink, Link} from "react-router-dom";

function ForgotPassword () {
    return <div className={style.forgotPassword}>
        <div className={style.logo}><img src={Bitmap} alt=""/></div>
        <div className={style.forgotPasswordBlok}>
            <div className={style.forgotPasswordGroup}>
                <div className={style.title}>Forgot password</div>
                <div className={style.libe}>Enter your email. Email: Your Password.to restore</div>
                <input type="email" placeholder={'Enter your email'} className={style.emailInput}/>
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