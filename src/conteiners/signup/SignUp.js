import style from './signup.module.scss'
import { RoseLogo, SlashEye, WatchIcon} from "../../assets/imeges";
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import isEmail from "validator/es/lib/isEmail";
import { Checkbox } from 'antd';

function SignUp({usersSignUp,userError}) {
    console.log(userError,"ERROR")
    let navigate = useNavigate()
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    const[showIcon,setShowIcon]=useState(false)
    const [showPassword, setShowPassword]=useState(false)
    const [user,setUser]=useState({
        firstName: "",
        lastName: "",
        username:"",
        password:"",
        confirmPassword:"",
    })


    const [error,setError]=useState({
        firstName:false,
        lastName:false,
        username:false,
        password:false,
        confirmPassword:false,
    })

    function valid(event){
        let result=true
        let err={
            confirmPassword:false
        }
        if(user.firstName===""){
            err.firstName=true
            result=false
        }
        if(user.lastName===""){
            err.lastName=true
            result=false
        }
        if(!isEmail(user.username )){
            err.username=true
            result=false
        }
        if(user.password.length < 8){
            err.password=true
            result=false
        }
        if(user.password !== user.confirmPassword || user.confirmPassword==="" ){
            err.confirmPassword=true
            result=false
        }
        return {result,err}
    }
    function sineUp() {
        let signDate = {...user}
        delete signDate.confirmPassword
        if(valid().result){
            usersSignUp(signDate).then(() => setUser(
                {firstName: "",lastName: "",username: "",password: "",confirmPassword: ""}))
            window.scroll(0,0)
            navigate("/confirm",{state:user})
        } else {
           setError({...error,...valid().err})
        }

    }

    const changeIcon  =()=> {
        setShowIcon(!showIcon )
    };
    const handleClick =()=> {
        setShowPassword(!showPassword )
    };
    function saveState(event){
        setError({
            ...error,
            [event.target.name]:false
        })
        setUser({
           ...user,
            [event.target.name]:event.target.value
        })
    }

    return <div className={style.signUp}>
        <NavLink to={"/"}>
            <RoseLogo title={''}/>
        </NavLink>
            <div className={style.signUpBlock}>
                <div className={style.signUpGroup}>
                    <div className={style.title}>Register</div>
                    <div className={style.head}>Enter your details to create a new account</div>
                    <input type="text"
                           value={user.firstName}
                           name={'firstName'}
                           onChange={(event) => {saveState(event)}}
                           placeholder={'Enter name'}
                           className={`${style.inputSection}
                           ${error.firstName ? style.errorBlock : style.borderTransparent}`}
                    />
                    <input type="text"
                           value={user.lastName}
                           name={'lastName'}
                           onChange={(event) => {saveState(event)}}
                           placeholder={'Enter last name'}
                           className={`${style.inputSection}
                           ${error.lastName ? style.errorBlock : style.borderTransparent} `}
                    />
                    <input type="email"
                           value={user.username}
                           name={'username'}
                           onChange={(event) => {saveState(event)}}
                           placeholder={'Enter your email'}
                           className={`${style.userNameInput} 
                           ${error.username ? style.errorBlock : style.borderTransparent}`}
                    />
                    <div className={style.passwordBlock }>
                        {!showPassword ?
                            <input type="password"
                                   value={user.password}
                                   name={'password'}
                                   onChange={(event) => {saveState(event)}}
                                   placeholder={'Enter your password'}
                                   className={`${style.passwordInput} 
                                   ${error.password ? style.errorBlock : style.borderTransparent}`}
                            />:
                            <input type="text"
                                   value={user.password}
                                   name={'password'}
                                   onChange={(event) => {saveState(event)}}
                                   placeholder={'Enter your password'}
                                   className={`${style.passwordInput} 
                                   ${error.password ? style.errorBlock : style.borderTransparent}`}
                            />}
                        {!showPassword ? <WatchIcon onClick={handleClick} title={''}/> : <SlashEye onClick={handleClick} title={''}/>}
                    </div>
                    <div className={style.passwordBlock }>
                        {!showIcon ?
                            <input type="password"
                                   value={user.confirmPassword}
                                   name={'confirmPassword'}
                                   onChange={(event) => {saveState(event)}}
                                   placeholder={'Enter your password'}
                                   className={`${style.passwordInput} 
                                   ${error.confirmPassword ? style.errorBlock : style.borderTransparent}`}/>:
                            <input type="text"
                                   value={user.confirmPassword}
                                   name={'confirmPassword'}
                                   onChange={(event) => {saveState(event)}}
                                   placeholder={'Enter your password'}
                                   className={`${style.passwordInput} 
                                   ${error.confirmPassword ? style.errorBlock : style.borderTransparent}`}/>}
                        {!showIcon ? <WatchIcon onClick={changeIcon } title={''}/> : <SlashEye onClick={changeIcon} title={''}/>}
                    </div>
                    <div className={style.checkboxText}>
                         <Checkbox onChange={onChange}>I agree to the terms of the sale, the
                        <span className={style.blueText}>privacy policy.</span></Checkbox>
                </div>
                    <button className={style.btnSignUp} onClick={sineUp}>Sign up</button>

                </div>
            </div>
            <div className={style.accountText}>Don't have an account yet?
                <NavLink to={"/signIn"}>
                    <span className={style.textLink}>Create an account</span>
                </NavLink>
            </div>
    </div>
}export default SignUp