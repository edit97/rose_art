import {GET_FAVORITES, GET_PRODUCTS, GET_SLIDER, POST_FAVORITES, REMOVE_FAVORITES} from '../constants/index';
import products from "../../conteiners/products/Products";

export const initialState = {
    products: {
        items: [],
        count: 0,
    },
    sliders:[],
    favorites:{
        elected:[],
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
                    items:state.products.items.map((products) => {
                        return  products.id === id ? {...products,isFavorite:true} : products
                    })
                }
            }
        }
        case REMOVE_FAVORITES: {
            const id= action.payload;
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    elected:state.favorites.elected.filter((list) => list.id !== id)
                },
                products: {
                    ...state.products,
                    items:state.products.items.map((item) => {
                        return item.id ===id ? {...item,isFavorite:false} : item
                    })
                }
            }
        }
        case GET_FAVORITES: {
            return {
                ...state,
                favorites:{
                    ...state.favorites,
                    elected:action.payload
                }
            }
        }
        default:
            return state
    }
}