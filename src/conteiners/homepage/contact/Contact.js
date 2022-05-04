import {YMaps, Map, Placemark, GeolocationControl, ZoomControl} from "react-yandex-maps";
import style from "./contact.module.scss";
import {useState} from "react";
import isEmail from "validator/es/lib/isEmail";

function Contact ({contactsUser}){
    const [contact, setContact]=useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    })
    const[result,setResult]=useState(false)
   const [error,setError] = useState({
       name:false,
       email:false,
       phone:false,
       message:false,
   })

    function validetion(){
        let result=false
        let error={}
        if(isEmail(contact.email )){
            console.log('hhhh')
              error={email:true}
             return result=true
        }else  if (contact.phone.length < 9){
            console.log('fffff')
            error={phone:false}
            return  result=true
        }
    }
console.log(validetion(),'jjjj')
    function handleClick(e) {
        if(validetion()){
            console.log(result,'kkkkk')
            contactsUser(contact).then(() => {
                setContact({name: "",email: "",phone: "",message: ""})
            })
        }else{
            setError({...error,email: true,phone: true})
        }
    }

    function saveState( event) {
        const regex = /^[+\d]\d*$/;
        if (event.target.name  === 'phone' && !regex.test(event.target.value)) {
            return;
        }
        setContact({
            ...contact,
            [event.target.name]:event.target.value
        })
    }

    const mapData = {
        center: [40.180843465756496,44.51673113111903],
        zoom: 13,
    };
    return <div className={style.contact}>
            <div className={style.registration}>
                <h1 className={style.title}>Появились вопросы?</h1>
                <input type={"text"}
                       value={contact.name}
                       name={'name'}
                       onChange={(event) => {saveState(event)}}
                       className={style.block}
                       placeholder={"Ваше имя"}/>
                <input type={"email"}
                       value={contact.email}
                       name={'email'}
                       onChange={(event) => {saveState(event)}}
                       className={`${style.block} ${!error.email ? "" : style.errorBlock}`}
                       placeholder={"Электронная почта"}/>
                <input type={"text"}
                       value={contact.phone}
                       name={'phone'}
                       onChange={(event) => {saveState(event)}}
                       className={`${style.block} ${!error.phone ? "" : style.errorBlock}`}
                       placeholder={"Номер"}/>
                <input type={"text"}
                       value={contact.message}
                       name={'message'}
                       onChange={(event) => {saveState(event)}}
                       className={style.block}
                       placeholder={"Комментарий"}/>
                <button className={style.btn} onClick={handleClick}>Отправить</button>
            </div>
        <div className={style.blocks}>
            <div className={style.map}>
                <YMaps>
                    <Map defaultState={mapData}  className={style.mapSize}>
                        <Placemark
                            geometry={[40.180843465756496,44.51673113111903]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: 'https://app.gardenhill.am/admin/files/resources/ic_location.svg',
                                iconImageSize: [50, 60],
                                iconImageOffset: [-15, -60]
                            }}

                        />
                        <GeolocationControl options={{
                            float: 'left',
                            position: {
                                top: 230,
                                left: 10,
                            },
                        }}/>
                        <ZoomControl options={{
                            float: 'left',
                            position: {
                                top: 10,
                                left: 10,
                            },
                        }}/>
                    </Map>
                </YMaps>
            </div>
            <div className={style.bgkRed}>
                <div className={style.address}>Адрес: 0010 Goght Kotayk Province, Armenia</div>
            </div>
        </div>
    </div>
}export default Contact;