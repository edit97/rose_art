import style from "./basketOrder.module.scss"
import { YMaps, Map, Placemark,ZoomControl,GeolocationControl } from "react-yandex-maps";
import React, {useState} from "react";
import { Radio } from 'antd';
import { Checkbox } from 'antd';

function BasketOrder() {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    const[paymentSystem,setPaymentSystem]=useState({
        street:"",
        address:"",
        name:"",
        email:"",
        number:""
    })
    function saveState(event){
        setPaymentSystem({
            ...paymentSystem,
            [event.target.name]:event.target.value
        })
    }
    const mapData = {
        center: [40.180843465756496,44.51673113111903],
        zoom: 12,
    };

    return <div className={style.basketOrder}>
            <div className={style.nav}>Home  /    All rose   /  Rose spray  /  My cart</div>
            <h1 className={style.aniTitle}>Payment Details</h1>
        <div className={style.item}>
            <div className={style.shipping}>
                <div className={style.ordering}>
                <div className={style.title}>Select Shipping Address</div>
                <div className={style.address}>
                    <div  className={style.inputTitle}>City , Street</div>
                    <input type="text"
                            value={paymentSystem.street}
                           name={'street'}
                           placeholder={"Street"}
                           onChange={(event) => {saveState(event)}}
                           className={style.streetAddress}/>
                </div>
                <div className={style.address}>
                    <div className={style.inputTitle}>Delivery Address</div>
                    <input type="text"
                           value={paymentSystem.address}
                           name={'address'}
                           placeholder={"Your address"}
                           onChange={(event) => {saveState(event)}}
                           className={style.streetAddress}/>
                </div>
                <div className={style.map}>
                    <YMaps>
                        <Map defaultState={mapData} className={style.yandexMap}>
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
            <div className={style.payment}>
                <div className={style.paymentTitle}>Payment Details</div>
                <div className={style.inputItems}>
                <div className={style.registration}>
                    <div className={style.nameTitle}>Full Name </div>
                    <input type="text"
                           value={paymentSystem.name}
                           name={'name'}
                           placeholder="Name"
                           onChange={(event) => {saveState(event)}}
                           className={style.registrationInput}/>
                </div>
                <div className={style.registration}>
                    <div className={style.nameTitle}>E-mail</div>
                    <input type="email"
                           value={paymentSystem.email}
                           name={'email'}
                           placeholder="Email"
                           onChange={(event) => {saveState(event)}}
                           className={style.registrationInput}/>
                </div>
                <div className={style.registration}>
                    <div className={style.nameTitle}>Phone number</div>
                    <input type="text"
                           value={paymentSystem.number}
                           name={'number'}
                           placeholder="Number"
                           onChange={(event) => {saveState(event)}}
                           className={style.registrationInput}/>
                </div>
                <div className={style.paymentSystem}>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                        <Radio value={1}><span className={style.radioText}>Online payment</span></Radio>
                        <Radio value={2}><span className={style.radioText}>Cash payment</span></Radio>
                    </Radio.Group>
                </div>
                <span className={style.line}></span>
                <div className={style.checkboxText}>
                    <Checkbox onChange={onChange}><span className={style.privacyText}>
                        I agree to the terms of the sale, the
                        <span className={style.textLink}>privacy policy.</span>
                    </span></Checkbox>
                </div>
                    <button className={style.btnPayment}>PAYMENT</button>
                </div>
            </div>
        </div>
    </div>
 }export default BasketOrder;