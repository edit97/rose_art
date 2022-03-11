import {Rose1,Rose2,Rose3,Rose4,Delete,Pluse,Minuse} from "../../assets/imeges";
import style from "./basket.module.scss";
import {Link} from "react-router-dom";

function Basket(){
    return (
        <div className={style.products}>
            <div className={style.nav}>Home  /    All rose   /  Rose spray  /  My cart</div>
            <h1 className={style.title}>There are 4 products</h1>
            <div className={style.product}>
                <div className={style.group}>
                    <div className={style.total}>
                        <div className={style.blok}>
                            <div className={style.rose}>
                                <Rose1/>
                                <div className={style.text}>Stick Up Cam Plug-In 13900֏ <span>1200֏</span></div>
                            </div>
                            <div className={style.delet}>
                                <div className={style.number}><Minuse/><span>1</span><Pluse/></div>
                                <div className={style.price}>13900֏ </div>
                                <div className={style.icon}><Delete/></div>
                            </div>
                        </div>
                        <div className={style.blok}>
                            <div className={style.rose}>
                                <Rose2/>
                                <div className={style.text}>Stick Up Cam Plug-In 13900֏ <span>1200֏</span></div>
                            </div>
                            <div className={style.delet}>
                                <div className={style.number}>
                                    <Minuse/><span>2</span><Pluse/>
                                </div>
                                <div className={style.price}>13900֏ </div>
                                <div className={style.icon}><Delete/></div>
                            </div>
                        </div>
                        <div className={style.blok}>
                            <div className={style.rose}>
                                <Rose3/>
                                <div className={style.text}>Stick Up Cam Plug-In 13900֏ <span>1200֏</span></div>
                            </div>
                            <div className={style.delet}>
                                <div className={style.number}>
                                    <Minuse/><span>1</span><Pluse/>
                                </div>
                                <div className={style.price}>13900֏ </div>
                                <div className={style.icon}><Delete/></div>
                            </div>
                        </div>
                        <div className={style.blok}>
                            <div className={style.rose}>
                                <Rose4/>
                                <div className={style.text}>Stick Up Cam Plug-In 13900֏ <span>1200֏</span></div>
                            </div>
                            <div className={style.delet}>
                                <div className={style.number}>
                                    <Minuse/><span>1</span><Pluse/>
                                </div>
                                <div className={style.price}>13900֏ </div>
                                <div className={style.icon}><Delete/></div>
                            </div>
                        </div>

                    </div>
                    <div className={style.remov}> Clear All Product</div>
                </div>
                <div className={style.summery}>
                    <h1 className={style.name}>Order summary</h1>
                    <div className={style.orderPlace}>
                        <div className={style.amount}><span>All products </span>
                            <span className={style.line}></span><p>3 product</p>
                        </div>
                        <div className={style.amount}><span>Order amount</span>
                            <span className={style.line}></span><p>36900 ֏</p>
                        </div>
                        <div className={style.amount}><span>Shoping</span>
                            <span className={style.line}></span><p className={style.colorRed}>Free</p>
                        </div>
                        <div className={style.amount}><span>Discound</span>
                            <span className={style.line}></span><p className={style.colorRed}>-6900 ֏</p>
                        </div>
                        <div className={style.totalPrice}><span>Total Price</span>
                            <span className={style.line}></span><span>26900 ֏</span>
                        </div>
                        <Link to={"/order"}>
                            <button className={style.btnOrder}>PLACE AN ORDER</button>
                        </Link>
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