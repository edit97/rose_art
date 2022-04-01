import style from "./basketOrder.module.scss"
import { YMaps, Map, Placemark,ZoomControl,GeolocationControl } from "react-yandex-maps";
import React, {useState} from "react";
import { Radio } from 'antd';

function BasketOrder() {
    const[paymentSistem,setPaymentSistem]=useState({
        street:"",
        addres:"",
        name:"",
        email:"",
        number:""
    })
    function edit(event){
        setPaymentSistem({
            ...paymentSistem,
            [event.target.name]:event.target.value
        })
    }
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
                    <input type="text"
                            value={paymentSistem.street}
                           name={'street'}
                           placeholder={"Street"}
                           onChange={(event) => {edit(event)}}
                           className={style.streetAdress}/>
                </div>
                <div className={style.addres}>
                    <div className={style.addresTittle}>Delivery Adres</div>
                    <input type="text"
                           value={paymentSistem.addres}
                           name={'addres'}
                           placeholder={"Your addres"}
                           onChange={(event) => {edit(event)}}
                           className={style.streetAdress}/>
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
                    <input type="text"
                           value={paymentSistem.name}
                           name={'name'}
                           placeholder="Name"
                           onChange={(event) => {edit(event)}}
                           className={style.registrationInput}/>
                </div>
                <div className={style.registration}>
                    <div className={style.nameTitle}>E-mail</div>
                    <input type="email"
                           value={paymentSistem.email}
                           name={'email'}
                           placeholder="Email"
                           onChange={(event) => {edit(event)}}
                           className={style.registrationInput}/>
                </div>
                <div className={style.registration}>
                    <div className={style.nameTitle}>Phone number</div>
                    <input type="text"
                           value={paymentSistem.number}
                           name={'number'}
                           placeholder="Number"
                           onChange={(event) => {edit(event)}}
                           className={style.registrationInput}/>
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
                    <span className={style.checkboxTxt}> I agree to the terms of the sale, the
                        <span className={style.textLink}>privacy policy.</span>
                    </span>
                </div>
                    <button className={style.btnPayment}>PAYMENT</button>
                </div>
            </div>
        </div>
    </div>
 }export default BasketOrder;