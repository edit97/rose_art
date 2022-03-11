import style from "../../conteiners/homepage/offer/offer.module.scss";
import {Group, Rosers, See} from "../../assets/imeges";
import Slider from "react-slick"


function RoseSlider(){
    const settings = {
        dots: true,
        dotsClass:'sliderDots',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return  <div className={style.firstRose}>
        <Slider {...settings}>
            <div className={style.roseSlide}>
                <div className={style.imgSlider}><img src={Rosers} alt=""/></div>
                <div className={style.sliderText}>
                    <div className={style.sliderTitle}>
                        <span>26 октября 2021 г</span>
                        <span className={style.work}>Фотоотчет о ходе</span>
                        <div className={style.seeBtn}>посмотреть<See/></div>
                    </div>
                </div>
            </div>
            <div className={style.roseSlide}>
                <div className={style.imgSlider}><img src={Rosers} alt=""/></div>
                <div className={style.sliderText}>
                    <div className={style.sliderTitle}>
                        <span>26 октября 2021 г</span>
                        <span className={style.work}>Фотоотчет о ходе</span>
                        <div className={style.seeBtn}>посмотреть<See/></div>
                    </div>
                </div>
            </div>
            <div className={style.roseSlide}>
                <div className={style.imgSlider}><img src={Rosers} alt=""/></div>
                <div className={style.sliderText}>
                    <div className={style.sliderTitle}>
                        <span>26 октября 2021 г</span>
                        <span className={style.work}>Фотоотчет о ходе</span>
                        <div className={style.seeBtn}>посмотреть<See/></div>
                    </div>
                </div>
            </div>
        </Slider>
        {/*
            todo
             պետք է լինի առանձին կոմպոնենտ
            */}

    </div>
} export default RoseSlider