import {YMaps, Map, Placemark, GeolocationControl, ZoomControl} from "react-yandex-maps";
import style from "./contact.module.scss";

function Contact (){

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
                <input className={style.blok} placeholder={"Ваше имя"}/>
                <input className={style.blok} placeholder={"Электронная почта"}/>
                <input className={style.blok} placeholder={"Тема"}/>
                <input className={style.blok} placeholder={"Комментарий"}/>
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