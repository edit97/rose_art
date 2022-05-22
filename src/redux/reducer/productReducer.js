import {GET_PRODUCTS} from '../constants/index';

export const initialState = {
    products: {
        items: [],
        count: 0,
    },
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
        default:
            return state
    }
}