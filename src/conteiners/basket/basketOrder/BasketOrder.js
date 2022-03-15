import style from "./basketOrder.module.scss"
import { YMaps, Map, Placemark } from "react-yandex-maps";

function BasketOrder() {
    const mapData = {
        center: [40.180843465756496,44.51673113111903],
        zoom: 12,
    };

    const coordinates = [
        [40.180843465756496,44.51673113111903],
        [40.180843465756496,44.51673113111903],
    ];

    return <div className={style.basketOrder}>
            <div className={style.nav}>Home  /    All rose   /  Rose spray  /  My cart</div>
            <h1 >Payment Details</h1>
        <div className={style.item}>
            <div className={style.shiping}>
                <div className={style.orderig}>
                <div className={style.title}>Select Shiping Addres</div>
                <div className={style.addres}>
                    <div className={style.addresTitle}>City , Street</div>
                    <input type="text" placeholder={"Street"}/>
                </div>
                <div className={style.addres}>
                    <div className={style.addresTittle}>Delivery Adres</div>
                    <input type="text" placeholder={"Your addres"}/>
                </div>
                <div className={style.map}>
                    <YMaps className={style.orderMap}>
                        <Map defaultState={mapData} className={style.yandexMap}>
                            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                        </Map>
                    </YMaps>
                </div>
                </div>
            </div>
            <div className={style.peymant}>
                <div className={style.peymantTitle}>Payment Details</div>
                <div className={style.inputItems}>
                <div className={style.registration}>
                    <div className={style.nameTitle}>Full Name </div>
                    <input type="text" placeholder={"Name"}/>
                </div>
                <div className={style.registration}>
                    <div className={style.nameTitle}>E-mail</div>
                    <input type="email" placeholder={"Email"}/>
                </div>
                <div className={style.registration}>
                    <div className={style.nameTitle}>Phone number</div>
                    <input type="text" placeholder={"Number"}/>
                </div>
                <div className={style.peymantSistem}>
                    <div className={style.paymantInput}><input type="radio" />Online payment</div>
                    <div className={style.paymantInput}><input type="radio"/>Cash payment</div>
                </div>
                <span className={style.line}></span>
                <div>
                    <input className={style.checkboxValue} type="checkbox" />
                    I agree to the terms of the sale, the privacy policy.
                </div>
                    <button className={style.btnPayment}>PAYMENT</button>
                </div>
            </div>
        </div>
    </div>
 }export default BasketOrder;