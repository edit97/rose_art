import style from './signup.module.scss'
import {Arr, RoseLogo, SlashEye, WatchIcon} from "../../assets/imeges";
import {NavLink} from "react-router-dom";
import {useState} from "react";

function SignUp() {
    /*
    * todo
    *  ['last name'] ուղել
    *  className={style.emailInput} փոխել
    *  Փոխել ֆունկցիաների անունները
    * */
    const[showIcon,setShowIcon]=useState(false)
    const [showPassword, setShowPassword]=useState(false)
    const [user,setUser]=useState({
        name: "",
        ['last name']: "",
        email:"",
        password:"",
        ['confirm password']:"",
    })

    const handleClick =()=> {
        setShowIcon(!showIcon )
    };
    const handlerClick =()=> {
        setShowPassword(!showPassword )
    };
    function edit(event){
        setUser({
           ...user,
            [event.target.name]:event.target.value
        })
    }
    return <div className={style.signup}>
            <div className={style.logo}><RoseLogo title={''}/></div>
            <div className={style.signUpBlok}>
                <div className={style.signUpGroup}>
                    <div className={style.title}>Register</div>
                    <div className={style.libe}>Enter your details to create a new account</div>
                    <input type="text"
                           value={user.name}
                           name={'name'}
                           onChange={(event) => {edit(event)}}
                           placeholder={'Enter name'}
                           className={style.emailInput}/>
                    <input type="text"
                           value={user["last name"]}
                           name={'last name'}
                           onChange={(event) => {edit(event)}}
                           placeholder={'Enter last name'}
                           className={style.emailInput}/>
                    <input type="email"
                           value={user.email}
                           name={'email'}
                           onChange={(event) => {edit(event)}}
                           placeholder={'Enter your email'}
                           className={style.emailInput}/>
                    <div className={style.passwordBlok }>
                        {!showPassword ?
                            <input type="password"
                                   value={user.password}
                                   name={'password'}
                                   onChange={(event) => {edit(event)}}
                                   placeholder={'Enter your password'}
                                   className={style.passwordInput}/>:
                            <input type="text"
                                   value={user.password}
                                   name={'password'}
                                   onChange={(event) => {edit(event)}}
                                   placeholder={'Enter your password'}
                                   className={style.passwordInput}/>}
                        {!showPassword ? <WatchIcon onClick={handlerClick} title={''}/> : <SlashEye onClick={handlerClick} title={''}/>}
                    </div>
                    <div className={style.passwordBlok }>
                        {!showIcon ?
                            <input type="password"
                                   value={user["confirm password"]}
                                   name={'confirm password'}
                                   onChange={(event) => {edit(event)}}
                                   placeholder={'Enter your password'}
                                   className={style.passwordInput}/>:
                            <input type="text"
                                   value={user["confirm password"]}
                                   name={'confirm password'}
                                   onChange={(event) => {edit(event)}}
                                   placeholder={'Enter your password'}
                                   className={style.passwordInput}/>}
                        {!showIcon ? <WatchIcon onClick={handleClick} title={''}/> : <SlashEye onClick={handleClick} title={''}/>}
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