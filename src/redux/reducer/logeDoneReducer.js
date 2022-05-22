import {POST_SIGNIN, POST_USER} from "../constants";

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
        case POST_USER: {
            return {
                ...state,
                user:action.payload,
                isLoggedIn: false,
            }}
        default:
            return state
    }
}