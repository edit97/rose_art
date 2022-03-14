import style from "../../conteiners/homepage/offer/offer.module.scss";
import {Group, Rosers, See} from "../../assets/imeges";
import Slider from "react-slick"


function RoseSlider(){
    const settings = {
        dots: true,
        dotsClass:'sliderDots',
        className:'roseSlide',
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return  <div className={style.firstRose}>
        <div className={style.textSlider}>
        <span>дружелюбно</span>
        <span className={style.workSlider}>Фотоотчет о ходе</span>
        <div className={style.btnSlider}>посмотреть<See/></div>
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
        {/*
            todo
             պետք է լինի առանձին կոմպոնենտ
            */}

    </div>
} export default RoseSlider