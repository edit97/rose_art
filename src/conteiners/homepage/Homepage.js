import React, {useEffect} from 'react'
import style from "./homepage.module.css";
import ProductList from "./productList/ProductList";
import Main from "./main/Main";
import Offer from "./offer/Offer";
import Contact from "./contact/Contact";

function Homepage({products,sliders,contactsUser}) {
    return <div className={style.homepage}>
        <Main/>
        <ProductList products={products}/>
        <Offer sliders={sliders}/>
        <Contact contactsUser={contactsUser}/>
    </div>
}

export default Homepage;

