import style from './select.module.scss'

function Select({products}) {
    return <div className={style.select}>
        <div className={style.titleBlock}>
            <div className={style.title}>All Roses</div>
            <div className={style.productsNumber}>{products.count} products</div>
        </div>
        <div className={style.selectBtn}>
            <button className={style.btn}>Spotlight Cam</button>
            <button className={style.btn}>Stick Up Cam Battery</button>
            <button className={style.btn}>Stick Up Cam Plug-In</button>
            <button className={style.btn}>Stick Up Cam Elite</button>
            <button className={style.btn}>Cam Elite</button>
            <button className={style.btn}>Stick Up Cam Solar</button>
            <button className={style.btn}>Camera</button>
            <button className={style.btn}>Stick Up Cam Elite</button>
            <button className={style.btn}>Cam Elite</button>
            <button className={style.btn}>Stick Up Cam Solar</button>
        </div>
    </div>
}export default Select