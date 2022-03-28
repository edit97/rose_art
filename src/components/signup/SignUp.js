import style from './signup.module.scss'
import { RoseLogo, WatchIcon} from "../../assets/imeges";
import {NavLink} from "react-router-dom";

function SignUp() {
    return <div className={style.signup}>
            <div className={style.logo}><RoseLogo/></div>
            <div className={style.signUpBlok}>
                <div className={style.signUpGroup}>
                    <div className={style.title}>Register</div>
                    <div className={style.libe}>Enter your details to create a new account</div>
                    <input type="text" placeholder={'Enter name'}  className={style.emailInput}/>
                    <input type="text" placeholder={'Enter last name'}  className={style.emailInput}/>
                    <input type="email" placeholder={'Enter your email'} className={style.emailInput}/>
                    <div className={style.passwordBlok }>
                        <input type="password" placeholder={'Enter your password'}  className={style.passwordInput}/>
                        <WatchIcon/>
                    </div>
                    <div className={style.passwordBlok }>
                        <input type="password" placeholder={'Enter your password'}  className={style.passwordInput}/>
                        <WatchIcon/>
                    </div>
                    <div className={style.checkboxText}>
                    <input className={style.checkboxValue} type="checkbox" id="checked"/>
                    <label htmlFor="checked">
                    </label>
                    I agree to the terms of the sale, the <span className={style.blueText}>privacy policy.</span>
                </div>
                    <button className={style.btnSignUp}>Sign up</button>
                </div>
            </div>
            <div className={style.accountText}>Don't have an account yet?
                <NavLink to={"/signin"}>
                    <span className={style.textLink}>Create an account</span>
                </NavLink>
            </div>
    </div>
}export default SignUp