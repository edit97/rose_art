import {Map} from "../../assets/imeges";
import style from "./contact.module.scss";

function Contact (){
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
            <div className={style.map}><img src={Map} alt=""/></div>
            <div className={style.bgkRed}>
                <div className={style.adress}>Адрес: 0010 Goght Kotayk Province, Armenia</div>
            </div>
        </div>
    </div>
}export default Contact;