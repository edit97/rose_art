import style from "../../conteiners/homepage/offer/offer.module.scss";
import {Rosers,ArrowRight} from "../../assets/imeges";
import Slider from "react-slick"


function RoseSlider(){
    const settings = {
        dots: true,
        arrows:false,
        className:'roseSlide',
        infinite: true,
        vertical: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    /*todo փոխել անունը firstRose-ի*/
    return  <div className={style.roseSlideGroup}>
        <div className={style.textSlider}>
            <span>дружелюбно</span>
            <span >Фотоотчет о ходе</span>
            <div className={style.btnSlider}>посмотреть<ArrowRight title={''}/></div>
        </div>
        <Slider {...settings}>
            <div className={style.roseSlide}>
                <div className={style.imgSlider}><img src={Rosers} alt=""/></div>
            </div>
            <div className={style.roseSlide}>
                <div className={style.imgSlider}><img src={Rosers} alt=""/></div>
            </div>
            <div className={style.roseSlide}>
                <div className={style.imgSlider}><img src={Rosers} alt=""/></div>
            </div>
        </Slider>
    </div>
} export default RoseSlider