import {GET_PRODUCTS, LOG_OUT, POST_SIGNIN} from "../constants";

export const initialState = {
    user:{},
    isLoggedIn: false,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case POST_SIGNIN: {
               return {
                   ...state,
                   user: action.payload,
                   isLoggedIn: true,
               }
            }
         case LOG_OUT: {
            return {
               user: {},
                isLoggedIn: false
            }}
        default:
            return state
    }
}