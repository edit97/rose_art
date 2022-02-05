import {Lukas,Ready,RoseImg,RoseArt} from "../../assets/imeges";
import stayle from "./main.module.scss";

function Main() {

    return <div className={stayle.main}>
        <div className={stayle.product}>
        <div className={stayle.backWhite}>
                <div className={stayle.choos}>
                    <h1>ВЫБЕРИ СВОЕ СЧАСТЬЕ</h1>
                    <p>С нашими опытными разработчиками вы сможете воплотить
                        в реальность ваши: опытная разработка может сделать
                        все, чтобы ваша идея развивалась…</p>
                    <button>Продукт</button>
                </div>
            </div>
            <div className={stayle.roseImg}><img src={RoseImg} alt=""/></div>
             <div className={stayle.rose}><img src={Ready} alt=""/></div>
        </div>
            <div className={stayle.aboutUs}>
                <div className={stayle.backRed}>
                <div className={stayle.more}>
                    <div className={stayle.roseArt}><img src={Lukas} alt=""/></div>
                    <div className={stayle.text}>
                    <h1>О нас</h1>
                    <p>Наши опытные разработчики могут воплотить любую вашу идею в реальность:
                        Опытная разработка может воплотить в жизнь все ваши идеи разработчиков и:
                        может воплотить все ваши идеи в muexperie makere все ваши идеи:
                        разработчики могут воплотить в жизнь все ваши идеи в конце проекта.</p>
                    <button>БОЛЬШЕ ></button>
                    </div>
                    <div className={stayle.art}><img src={RoseArt} alt=""/></div>
                </div>
            </div>
        </div>
    </div>
}
export default Main