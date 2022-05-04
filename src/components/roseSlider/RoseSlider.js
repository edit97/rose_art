import style from "../../conteiners/homepage/offer/offer.module.scss";
import {ArrowRight} from "../../assets/imeges";
import Slider from "react-slick";
import React from "react";
import {generateMemberMediaUrl} from "../../utils/generateMediaUrl";


function RoseSlider({sliders}){
    // console.log(sliders.title,"uuuu")
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

    return  <div className={style.roseSlideGroup}>
        <div className={style.textSlider}>
            <span>дружелюбно</span>
            <span >{sliders?.title}</span>
            <div className={style.btnSlider}>посмотреть<ArrowRight title={''}/></div>
        </div>
        <Slider {...settings}>
            {sliders?.map((item) => {
                return  <div className={style.roseSlide} key={item.id}>
                    <div className={style.imgSlider}>
                        <img src={generateMemberMediaUrl(item?.mediaMain?.path)} alt=""/>
                    </div>
                </div>
            })}
        </Slider>
    </div>
} export default RoseSlider