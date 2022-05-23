import style from "./profileInformation.module.scss"
import {Edit} from "../../assets/imeges";
import Demo, {App} from "../upload/upload";
import {useLocation} from "react-router-dom";
import {useState} from "react";

function ProfileInformation() {
    // let location=useLocation()
    // const [state,setState]=useState({
    //     email:location.state.username
    // })

    return <div className={style.profileInformation}>
        <div className={style.profileHeader}>
            Profile information
        </div>
        <div className={style.profile}>
            <div className={style.imgUpload}>
                <App/>
            </div>
            <div className={style.inputsBlock}>
                <div className={style.inputFirstBlock}>
                    <input type="text"
                           placeholder={'Enter name'}
                           className={style.nameInput}
                    />
                    <input type="text"
                           placeholder={'Enter last name'}
                           className={style.nameInput}
                    />
                    <div className={style.emailEdit}>
                        <input type="email"
                               // value={location.state.username}
                               placeholder={'Enter your email'}
                               className={style.emailInput}
                        />
                        <button className={style.btnEdit}><Edit/></button>
                    </div>
                    <button className={style.btnInput}>Change password</button>
                </div>
                <div className={style.inputSecondBlock}>
                    <input type="text"
                           placeholder={'Phone number'}
                           className={style.nameInput}
                    />
                    <input type="text"
                           placeholder={'City'}
                           className={style.nameInput}
                    />
                    <input type="text"
                           placeholder={'Address'}
                           className={style.nameInput}
                    />
                    <button className={style.btnInput}>Save</button>
                </div>
            </div>
        </div>

    </div>

}export  default ProfileInformation