import style from './signin.module.scss'
import {RoseLogo, FacebookIcon, Google, WatchIcon, SlashEye} from "../../assets/imeges";
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import isEmail from "validator/es/lib/isEmail";

function SignIn({signIn}) {
    let navigate=useNavigate()
    const [showIcon, setShowIcon] = useState(false);
    const changeIcon = () => {
        setShowIcon(!showIcon)
    };
    const [user, setUser] = useState({
        username: "",
        password: "",
        grantType:"password",
    })
    const [error,setError]=useState({
        username:false,
        password:false,
    })

    function validation(){
        let result=true
        let err = {}
        if(!isEmail(user.username)){
            result=false
            err.username=true
        }
        if(user.password.length < 8) {
            result=false
            err.password=true
        }
        return {result,err}
    }

    function clickSignIn() {
        if(validation().result){
            signIn(user).then(() => setUser({username: "",password: "",grantType: ""}))
            window.scroll(0,0)
            navigate("/profile",{state:user})
        }else {
            setError({...error,...validation().err})
        }
    }

    function saveState(event){
        setError({
            ...error,
            [event.target.name]:false
        })
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    }


    return <div className={style.signIn}>
        <NavLink to={"/"}>
            <RoseLogo title={''}/>
        </NavLink>
        <div className={style.signInBlock}>
            <div className={style.signInGroup}>
                <div className={style.title}>Welcome</div>
                <div className={style.head}>Enter your credentials to access your account</div>
                <input type="email"
                       value={user.username}
                       name={'username'}
                       onChange={(event) => {
                           saveState(event)
                       }}
                       placeholder={'Enter your email'}
                       className={`${style.inputSection} 
                                        ${error.username ? style.errorBlock : style.borderTransparent}`}/>
                <div className={style.passwordBlock}>
                    {!showIcon ? <input type="password"
                                        value={user.password}
                                        name={'password'}
                                        onChange={(event) => {
                                            saveState(event)
                                        }}
                                        placeholder={'Enter your password'}
                                        className={`${style.passwordInput} 
                                        ${error.password ? style.errorBlock : style.borderTransparent}`}/>
                        : <input type="text"
                                 value={user.password}
                                 name={'password'}
                                 onChange={(event) => {
                                     saveState(event)
                                 }}
                                 placeholder={'Enter your password'}
                                 className={`${style.passwordInput} 
                                        ${error.password ? style.errorBlock : style.borderTransparent}`}/>}
                    {!showIcon ? <WatchIcon onClick={changeIcon } title={''}/> :
                        <SlashEye onClick={changeIcon} title={''}/>}

                </div>
                <NavLink to={"/forgotPassword"} className={style.forgotPasswordLink}>
                    <div className={style.text}>Forgot password?</div>
                </NavLink>
                    <button className={style.btnSignIn} onClick={clickSignIn}>Sign in</button>
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