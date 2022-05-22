import style from './confirm.module.scss'
import { RoseLogo} from "../../assets/imeges";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

function Confirm({usersActivation,signIn}) {
    let location=useLocation()
    let navigate = useNavigate()

        const [user,setUser]=useState({
            username:location.state?.username,
            code:"",
    })
    const value = {
        username:location.state?.username,
        password:location.state?.password,
    }
    const [form,setForm]=useState({
        code_0:"",
        code_1:"",
        code_2:"",
        code_3:"",
        code_4:"",
        code_5:"",
    })

    function confirmClick() {
        user.code=form.code_0+form.code_1+form.code_2+form.code_3+form.code_4+form.code_5
        if(user.code !== ''){
            usersActivation(user).then(signIn({...value,grantType:"password"}))
            window.scroll(0,0)
            navigate("/")
        }

    }
    function saveState(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    return <div className={style.confirm}>
        <NavLink to={"/"}>
            <RoseLogo title={''}/>
        </NavLink>
        <div className={style.confirmBlock}>
            <div className={style.confirmGroup}>
                <div className={style.title}>Confirm your email</div>
                <div className={style.head}>We sent a confirmation email to
                    <span className={style.username}>{location.state.username}</span></div>
                <div className={style.inputBlock}>
                    <input type="text"
                           className={`${style.emailInput} ${form.code_0 === "" ? style.inputTransparent : style.inputValid}`}
                           value={form.code_0}
                           name={'code_0'}
                           onChange={(event) => {saveState(event) }}
                    />
                    <input type="text"
                           className={`${style.emailInput} ${form.code_1 === "" ? style.inputTransparent : style.inputValid}`}
                           value={form.code_1}
                           name={'code_1'}
                           onChange={(event) => {saveState(event)}}
                    />
                    <input type="text"
                           className={`${style.emailInput} ${form.code_2 === "" ? style.inputTransparent : style.inputValid}`}
                           value={form.code_2}
                           name={'code_2'}
                           onChange={(event) => {saveState(event)}}
                    />
                    <input type="text"
                           className={`${style.emailInput} ${form.code_3 === "" ? style.inputTransparent : style.inputValid}`}
                           value={form.code_3}
                           name={'code_3'}
                           onChange={(event) => {saveState(event)}}
                    />
                    <input type="text"
                           className={`${style.emailInput} ${form.code_4 === "" ? style.inputTransparent : style.inputValid}`}
                           value={form.code_4}
                           name={'code_4'}
                           onChange={(event) => {saveState(event)}}
                    />
                    <input type="text"
                           className={`${style.emailInput} ${form.code_5 === "" ? style.inputTransparent : style.inputValid}`}
                           value={form.code_5}
                           name={'code_5'}
                           required
                           onChange={(event) => {saveState(event)}}
                    />
                </div>
                <button className={style.btnConfirm} onClick={confirmClick}>Confirm</button>
            </div>
        </div>
        <div className={style.accountText}>If you do not see it yet?
            <NavLink to={"/signIn"}>
                <span>You can send your confirmation email again.</span>
            </NavLink>
        </div>
    </div>
}export default Confirm