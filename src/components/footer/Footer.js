import {Flag,Steps,Facebook,Instagram,Linkedin,Arrow} from "../../assets/imeges";
import style from "./footer.module.scss";


function Footer(){
    return <div className={style.footer}>
        <div className={style.group}>
        <div className={style.aboutUs}>
            <div className={style.adress}>
                <h1 className={style.title}>Address</h1>
                <span>Margaryan 1st alley 4/2 building Yerevan Armenia</span>
                <div className={style.flag}><Flag/> HY <Arrow/></div>
            </div>
            <div className={style.comapny}>
                <div className={style.blok}>
                    <h1 className={style.title}>Comapny</h1>
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Blog</div>
                    <div>Apps</div>
                    <div>Sine in</div>
                </div>
                <div className={style.blok}>
                    <h1 className={style.title}>Comapny</h1>
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Blog</div>
                    <div>Apps</div>
                    <div>Sine in</div>
                </div>
                <div className={style.blok}>
                    <h1 className={style.title}>Comapny</h1>
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Blog</div>
                    <div>Apps</div>
                    <div>Sine in</div>
                </div>
            </div>
            <div className={style.subscribe}>
                <div className={style.follow}>
                    <h1 className={style.title}>Follow us</h1>
                    <Instagram/>
                    <Linkedin/>
                    <Facebook/>
                </div>
                <span className={style.underLine}></span>
                <div className={style.subscribe}>
                    <h1 className={style.title}>Subscribe</h1>
                    <span>Subscribe, find out about discounts, deals, new products.</span>
                </div>
               <button className={style.btn}> <input type="email"/>Subscribe</button>
            </div>
        </div>
        <span className={style.line}></span>
        <div className={style.date}>
            <div className={style.text}>© Copyright 2021 SmartԼife . All Rights Reserved</div>
            <div className={style.iconComapny}><Steps/></div>
        </div>
        </div>
    </div>
}export default Footer;