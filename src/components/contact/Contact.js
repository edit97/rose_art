import {Map} from "../../assets/imeges";
import style from "./contact.module.scss";

function Contact (){
    return <div className={style.contact}>
        {/*<div className={style.bgkGrey}>*/}
            <div className={style.registration}>
                <h1>Появились вопросы?</h1>
                <div className={style.name}>
                    Ваше имя
                    <div className={style.line}></div>
                </div>
                <div className={style.blok}>
                    электронная почта
                    <div className={style.lineGrey}></div>
                </div>
                <div className={style.blok}>
                    Тема
                    <div className={style.lineGrey}></div>
                </div>
                <div className={style.blok}>
                    Комментарий
                    <div className={style.lineGrey}></div>
                </div>
                <button className={style.btn}>Отправить</button>
            </div>
        <div className={style.bloks}>
            <div className={style.bgkRed}>
                <div className={style.map}><img src={Map} alt=""/></div>
                <div className={style.adress}>Адрес: 0010 Goght Kotayk Province, Armenia</div>
            </div>
        </div>
        {/*</div>*/}
    </div>
}export default Contact;