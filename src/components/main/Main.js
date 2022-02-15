import {Lukas,Ready,RoseImg,RoseArt} from "../../assets/imeges";
import style from "./main.module.scss";

function Main() {
    return <div className={style.main}>
        <div className={style.product}>
            <div className={style.bgkGray}>
                <div className={style.mainText}>
                    <div className={style.title}>
                        <span>ВЫБЕРИ СВОЕ СЧАСТЬЕ</span>
                    </div>
                    <p className={style.aniText}>С нашими опытными разработчиками вы сможете воплотить
                        в реальность ваши: опытная разработка может сделать
                        все, чтобы ваша идея развивалась…</p>
                    <button>Продукт</button>
                </div>
            </div>
            <div className={style.roseImg}><img src={RoseImg} alt=""/></div>
            <div className={style.rose}><img src={Ready} alt=""/></div>
        </div>
        <div className={style.bgkRed}>
            <div className={style.more}>
                <div className={style.roseArt}><img src={Lukas} alt=""/></div>
                <div className={style.text}>
                    <h1>О нас</h1>
                    <p>Наши опытные разработчики могут воплотить любую вашу идею в реальность:
                        Опытная разработка может воплотить в жизнь все ваши идеи разработчиков и:
                        может воплотить все ваши идеи в muexperie makere все ваши идеи:
                        разработчики могут воплотить в жизнь все ваши идеи в конце проекта.</p>
                    <button>БОЛЬШЕ ></button>
                </div>
                <div className={style.art}><img src={RoseArt} alt=""/></div>
            </div>
        </div>
    </div>
}
export default Main