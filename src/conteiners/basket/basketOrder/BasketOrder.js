import style from "./basketOrder.module.scss"
import { YMaps, Map, Placemark,ZoomControl,GeolocationControl } from "react-yandex-maps";
import React  from "react";
import { Radio } from 'antd';

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
                    <input type="text" placeholder={"Street"} className={style.streetAdress}/>
                </div>
                <div className={style.addres}>
                    <div className={style.addresTittle}>Delivery Adres</div>
                    <input type="text" placeholder={"Your addres"} className={style.streetAdress}/>
                </div>
                <div className={style.map}>
                    <YMaps className={style.orderMap}>
                        <Map defaultState={mapData} className={style.yandexMap}>
                            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                            <GeolocationControl options={{
                                float: 'left',
                                position: {
                                    top: 78,
                                    left: 10,
                                },
                            }}/>
                            <ZoomControl options={{
                                float: 'left',
                                position: {
                                    top: 12,
                                    left: 10,
                                },
                            }}/>
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
                    <input type="text" placeholder="Name" className={style.registrationInput}/>
                </div>
                <div className={style.registration}>
                    <div className={style.nameTitle}>E-mail</div>
                    <input type="email" placeholder="Email" className={style.registrationInput}/>
                </div>
                <div className={style.registration}>
                    <div className={style.nameTitle}>Phone number</div>
                    <input type="text" placeholder="Number" className={style.registrationInput}/>
                </div>
                <div className={style.peymantSistem}>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                        <Radio value={1}>Online payment</Radio>
                        <Radio value={2}>Cash payment</Radio>
                    </Radio.Group>
                </div>
                <span className={style.line}></span>
                <div className={style.checkboxText}>
                    <input className={style.checkboxValue} type="checkbox" id="checked"/>
                    <label htmlFor="checked">
                    </label>
                    I agree to the terms of the sale, the <span>privacy policy.</span>
                </div>
                    <button className={style.btnPayment}>PAYMENT</button>
                </div>
            </div>
        </div>
    </div>
 }export default BasketOrder;