import React from 'react'
import {connect} from "react-redux";

import style from "./homepage.module.css";

import ProductList from "./productList/ProductList";
import Main from "./main/Main";
import Offer from "./offer/Offer";
import Contact from "./contact/Contact";
import {getData} from "../../redux/action";
import {getPropsFromState} from "../../redux/mapStateToProps";

function Homepage({products}) {
    console.log(products, 'products from react');
    return (
    <div className={style.homepage}>
        <Main/>
        <ProductList/>
        <Offer/>
        <Contact/>
    </div>
    )
}


const mapDispatchToProps = {
    getData,
}

const mapStateToProps = (state) => {
    return getPropsFromState(state, [
        'products',
    ])
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

