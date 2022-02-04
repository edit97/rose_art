import {Lukas,Ready} from "../../assets/imeges";
import stayle from "./main.module.scss";

function Main() {

    return <div className={stayle.main}>
        <div className={stayle.backWhite}>
            <div className={stayle.product}>
                <div className={stayle.choos}>
                    <h1>ВЫБЕРИ СВОЕ СЧАСТЬЕ</h1>
                    <p>С нашими опытными разработчиками вы сможете воплотить
                        в реальность ваши: опытная разработка может сделать
                        все, чтобы ваша идея развивалась…</p>
                    <button>Продукт</button>
                </div>
                <img src={Ready} alt=""/>
            </div>
        </div>
        <div className={stayle.backRed}>
            <div className={stayle.aboutUs}>
                <img src={Lukas} alt=""/>
                <div className={stayle.more}>
                    <h1>О нас</h1>
                    <p>Наши опытные разработчики могут воплотить любую вашу идею в реальность:
                        Опытная разработка может воплотить в жизнь все ваши идеи разработчиков и:
                        может воплотить все ваши идеи в muexperie makere все ваши идеи:
                        разработчики могут воплотить в жизнь все ваши идеи в конце проекта.</p>
                    <button>БОЛЬШЕ ></button>
                </div>
            </div>
        </div>
    </div>
}
export default Main