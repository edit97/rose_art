import style from './totalCard.module.scss'
import {Delete, Minuse, Pluse, Rose2} from "../../../../assets/imeges";
import {generateMemberMediaUrl} from "../../../../utils/generateMediaUrl";
import React from "react";

function TotalCard({data}) {
    return <div className={style.totalCard}>
        <div className={style.block}>
            <div className={style.rose}>
                <div className={style.img}>
                    <img src={generateMemberMediaUrl(data?.mediaMain?.path)} alt=""/>
                </div>
                <div className={style.text}>
                    <div className={style.priceText}>{data?.title}</div>
                    <div>
                        <span> {data?.price}֏</span>
                        <span className={style.priceNumber}>{data?.oldPrice}</span></div>
                    </div>
            </div>
            <div className={style.delete}>
                <div className={style.number}>
                    <Minuse title={''}/><span>2</span><Pluse title={''}/>
                </div>
                <div className={style.price}>{data?.price} ֏</div>
                <div className={style.icon}><Delete title={''}/></div>
            </div>
        </div>
    </div>
} export default TotalCard