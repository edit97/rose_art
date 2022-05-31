import {GET_FAVORITES, GET_PRODUCTS, GET_SLIDER, POST_FAVORITES, REMOVE_FAVORITES} from '../constants/index';

export const initialState = {
    products: {
        items: [],
        count: 0,
    },
    sliders:[],
    favorites:[],
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVORITES: {
            return {
               ...state,
           }
        }
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
        case POST_FAVORITES: {
            const id = action.payload
            return {
                ...state,
                products:{
                    ...state.products,
                    items:state.products.items.map((product) => {
                        return  product.id === id ? {...product,isFavorite:true} : product
                    })
                }
            }
        }
        case REMOVE_FAVORITES: {
            const id= action.payload;
            return {
                ...state,
                products: {
                    ...state.products,
                    items: state.products.items.map((item) => {
                        return item.id ===id ? {...item,isFavorite:false} : item
                    })
                }
            }
        }
        default:
            return state
    }
}