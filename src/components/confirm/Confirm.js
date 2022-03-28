import style from './confirm.module.scss'
import {Bitmap, RoseLogo} from "../../assets/imeges";
import {NavLink} from "react-router-dom";

function Confirm() {
    return <div className={style.confirm}>
        <div className={style.logo}><RoseLogo/></div>
        <div className={style.confirmBlok}>
            <div className={style.confirmGroup}>
                <div className={style.title}>Confirm your email</div>
                <div className={style.libe}>We sent a confirmation email to animxitaryan@gmail.com</div>
                <div className={style.inputBlok}>
                    <input type="text"  className={style.emailInput}/>
                    <input type="text"  className={style.emailInput}/>
                    <input type="text"  className={style.emailInput}/>
                    <input type="text"  className={style.emailInput}/>
                    <input type="text"  className={style.emailInput}/>
                    <input type="text"  className={style.emailInput}/>
                </div>
                <button className={style.btnConfirm}>Confirm</button>
            </div>
        </div>
        <div className={style.accountText}>If you do not see it yet?
            <NavLink to={"/signin"}>
                <span>You can send your confirmation email again.</span>
            </NavLink>
        </div>
    </div>
}export default Confirm