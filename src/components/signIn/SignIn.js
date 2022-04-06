import style from './signin.module.scss'
import {RoseLogo, FacebookIcon, Google, WatchIcon, SlashEye} from "../../assets/imeges";
import {NavLink} from "react-router-dom";
import {useState} from "react";


/*todo
   Փոխել ֆունկցիաների անունները
   չօգտագործվող import-նեը ջնջել բոլոր էջերում
   */
function SignIn() {
    const [showIcon, setShowIcon] = useState(false);
    const changeIcon = () => {
        setShowIcon(!showIcon)
    };
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    function saveState(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    }


    return <div className={style.signIn}>
        <div><RoseLogo title={''}/></div>
        <div className={style.signInBlock}>
            <div className={style.signInGroup}>
                <div className={style.title}>Welcome</div>
                <div className={style.head}>Enter your credentials to access your account</div>
                <input type="email"
                       value={user.email}
                       name={'email'}
                       onChange={(event) => {
                           saveState(event)
                       }}
                       placeholder={'Enter your email'}
                       className={style.inputSection}/>
                <div className={style.passwordBlock}>
                    {!showIcon ? <input type="password"
                                        value={user.password}
                                        name={'password'}
                                        onChange={(event) => {
                                            saveState(event)
                                        }}
                                        placeholder={'Enter your password'}
                                        className={style.passwordInput}/>
                        : <input type="text"
                                 value={user.password}
                                 name={'password'}
                                 onChange={(event) => {
                                     saveState(event)
                                 }}
                                 placeholder={'Enter your password'}
                                 className={style.passwordInput}/>}
                    {!showIcon ? <WatchIcon onClick={changeIcon } title={''}/> :
                        <SlashEye onClick={changeIcon} title={''}/>}

                </div>
                <NavLink to={"/forgotPassword"} className={style.forgotPasswordLink}>
                    <div className={style.text}>Forgot password?</div>
                </NavLink>
                <button className={style.btnSignIn}>Sign in</button>
                <button className={style.btnGoogle}>
                    <div className={style.googleText}><Google title={''}/>Login with Google</div>
                </button>
                <button className={style.btnFacebook}>
                    <div className={style.googleText}><FacebookIcon title={''}/>Login with Facebook</div>
                </button>
            </div>
        </div>
        <div className={style.accountText}>Don't have an account yet?
            <NavLink to={"/signup"}>
                <span>Create an account</span>
            </NavLink>
        </div>
    </div>
}

export default SignIn