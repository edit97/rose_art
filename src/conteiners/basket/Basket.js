import style from "./basket.module.scss";
import {NavLink} from "react-router-dom";
import TotalCard from "../../components/uiItem/cards/totalCard/TotalCard";

function Basket(){

    return (
        <div className={style.products}>
            <div className={style.nav}>Home  /    All rose   /  Rose spray  /  My cart</div>
            <h1 className={style.title}>There are 4 products</h1>
            <div className={style.product}>
                <div className={style.group}>
                    <div className={style.total}>
                        <TotalCard/>
                        <TotalCard/>
                        <TotalCard/>
                        <TotalCard/>
                    </div>
                    <div className={style.remove}> Clear All Product</div>
                </div>
                <div className={style.summery}>
                    <h1 className={style.name}>Order summary</h1>
                    <div className={style.orderPlace}>
                        <div className={style.amount}><span>All products </span>
                            <div className={style.line}></div><div className={style.colorRed}>3 product</div>
                        </div>
                        <div className={style.amount}><span>Order amount</span>
                            <div className={style.line}></div><div className={style.colorRed}>36900 ֏</div>
                        </div>
                        <div className={style.amount}><span>Shoping</span>
                            <div className={style.line}></div><div className={style.colorRed}>Free</div>
                        </div>
                        <div className={style.amount}><span>Discound</span>
                            <div className={style.line}></div><div className={style.colorRed}>-6900 ֏</div>
                        </div>
                        <div className={style.totalPrice}><span>Total Price</span>
                            <div className={style.line}></div><div>26900 ֏</div>
                        </div>
                        <NavLink to={"/basket/order"}>
                            <button className={style.btnOrder}>PLACE AN ORDER</button>
                    </NavLink>
                        <div className={style.txt}>If there are products in the order, on which there is
                            a promotion, the final value will be confirmed after
                            the order by the employee of theorganization.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} export default Basket