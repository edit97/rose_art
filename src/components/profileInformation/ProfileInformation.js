import style from "./profileInformation.module.scss"
import {Edit} from "../../assets/imeges";
import {App} from "../upload/upload";
import {useEffect, useState} from "react";

function ProfileInformation({user,usersUpdate,userProfile,}) {
    // console.log(user,"ppppp")
    const [information,setInformation]= useState( {
        firstName:"",
        lastName:"",
        username:"",
        phone:"",
        region:"",
        address:"",
        profilePicturePath:"",
    })
    useEffect(() => {
        userProfile()
        setInformation({
            firstName:user.firstName,
            lastName:user.lastName,
            username:user.username,
            phone:user.phone,
            region:user.region,
            address:user.address,
            profilePicturePath:user.profilePicturePath

        })
    },[user.phone])

    function validation() {
        let result = true
        let val = true
      for(let key in information){
          if(information[key] === ""){
             result=false
             val=false
          }
      }
        return {result,val}
    }
    // console.log(validation().result)
    function updateClick() {
        console.log("CLICK")
        if(validation().result){
            usersUpdate(information)
        }
    }
    function saveState(e) {
        const regex = /^[\d]\d*$/;
        if (e.target.name  === 'phone' && !regex.test(e.target.value)) {
            return;
        }
        setInformation({
            ...information,
            [e.target.name]:e.target.value.trimStart()
        })
    }
    const onChange = (imageList) => {
        setInformation(imageList)
        console.log(imageList,"IMG")
    };

    return <div className={style.profileInformation}>
        <div className={style.profileHeader}>
            Profile information
        </div>
        <div className={style.profile}>
            <div className={style.imgUpload}>
                <App  imgonChange={onChange}
                      images={information.profilePicturePath}/>
            </div>
            <div className={style.inputsBlock}>
                <div className={style.inputFirstBlock}>
                    <input type="text"
                           value={information.firstName}
                           name={"firstName"}
                           onChange={(event) => {saveState(event)}}
                           placeholder={'Enter name'}
                           className={style.nameInput}
                    />
                    <input type="text"
                           value={information.lastName}
                           name={"lastName"}
                           onChange={(event) => {saveState(event)}}
                           placeholder={'Enter last name'}
                           className={style.nameInput}
                    />
                    <div className={style.emailEdit}>
                        <input type="email"
                               value={information.username}
                               name={"username"}
                               onChange={(event) => {saveState(event)}}
                               placeholder={'Enter your email'}
                               className={style.emailInput}
                        />
                        <button className={style.btnEdit}><Edit/></button>
                    </div>
                    <button className={style.btnInput}>Change password</button>
                </div>
                <div className={style.inputSecondBlock}>
                    <div className={style.inputPhone}>
                        <span className={style.phoneCode}>+347</span>
                        <input type="number"
                               placeholder={'Phone number'}
                               value={information.phone}
                               name={"phone"}
                               onChange={(event) => {saveState(event)}}
                               className={`${style.phoneInput}`}
                        />
                    </div>
                    <input type="text"
                           value={information.region}
                           name={"region"}
                           onChange={(event) => {saveState(event)}}
                           placeholder={'City'}
                           className={style.nameInput}
                    />
                    <input type="text"
                           value={information.address}
                           name={"address"}
                           onChange={(event) => {saveState(event)}}
                           placeholder={'Address'}
                           className={style.nameInput}
                    />
                    <button className={`${validation().val ? style.btnInput : style.btnDisable}`}
                            onClick={updateClick}
                             disabled={!validation().val} >Save</button>
                </div>
            </div>
        </div>

    </div>

}export  default ProfileInformation