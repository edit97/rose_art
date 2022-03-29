import {YMaps, Map, Placemark, GeolocationControl, ZoomControl} from "react-yandex-maps";
import style from "./contact.module.scss";
import {useState} from "react";

function Contact (){
    const [contact, setContact]=useState({
        name:"",
        email:"",
        tem:"",
        comments:"",
    })


    function edit(contact, event) {
        const copy = Object.assign({})
        copy[contact] = event.target.value;
        setContact(copy);
    }

    const mapData = {
        center: [40.180843465756496,44.51673113111903],
        zoom: 13,
    };

    const coordinates = [
        [40.180843465756496,44.51673113111903],
        [40.180843465756496,44.51673113111903],
    ];
    return <div className={style.contact}>
            <div className={style.registration}>
                <h1>Появились вопросы?</h1>
                <input type={"text"}
                       value={contact.name}
                       onChange={(event) => {edit('name',event)}}
                       className={style.blok}
                       placeholder={"Ваше имя"}/>
                <input type={"email"}
                       value={contact.email}
                       onChange={(event) => {edit('email',event)}}
                       className={style.blok}
                       placeholder={"Электронная почта"}/>
                <input type={"text"}
                       value={contact.tem}
                       onChange={(event) => {edit('tem',event)}}
                       className={style.blok}
                       placeholder={"Тема"}/>
                <input type={"text"}
                       value={contact.comments}
                       onChange={(event) => {edit('commant',event)}}
                       className={style.blok}
                       placeholder={"Комментарий"}/>
                <button className={style.btn}>Отправить</button>
            </div>
        <div className={style.bloks}>
            <div className={style.map}>
                <YMaps className={style.mapBlock}>
                    <Map defaultState={mapData}  className={style.mapSize}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
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
                <div className={style.adress}>Адрес: 0010 Goght Kotayk Province, Armenia</div>
            </div>
        </div>
    </div>
}export default Contact;