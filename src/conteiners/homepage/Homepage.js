import React, {useEffect} from 'react'
import style from "./homepage.module.css";
import ProductList from "./productList/ProductList";
import Main from "./main/Main";
import Offer from "./offer/Offer";
import Contact from "./contact/Contact";

function Homepage({products}) {
    return <div className={style.homepage}>
        <Main/>
        <ProductList products={products}/>
        <Offer/>
        <Contact/>
    </div>
}

export default Homepage;

