import {GET_PRODUCTS, GET_SLIDER} from '../constants/index';

export const initialState = {
    products: {
        items: [],
        count: 0,
    },
    sliders:[],
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
               ...state,
               products:{
                   items: action.payload.products,
                   count: action.payload.productsCount,
               }
           }
        }
        case GET_SLIDER: {
            return {
                ...state,
                sliders: action.payload
            }
        }
        default:
            return state
    }
}