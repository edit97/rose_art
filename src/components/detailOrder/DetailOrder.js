import style from "./detailOrder.module.scss"


function DetailOrder() {
   return <div className={style.detailorder}>
         <div className={style.products}>
            <div className={style.header}></div>
            <div className={style.order}></div>
         </div>
      <div className={style.adress}></div>
   </div>
}export  default DetailOrder