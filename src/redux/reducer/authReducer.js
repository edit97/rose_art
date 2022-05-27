import {GET_PROFILE, LOG_OUT, POST_SIGNIN, POST_USER, USER_ERROR, USER_UPDATE, USERS_ACTIVATION} from "../constants";

export const initialState = {
    user:{
        // phone:"",
        // address:"",
        // region:"",
    },
    signIn:{},
    users:{},
    update:{},
    code:{},
    userError:false,
    isLoggedIn: false,
    accessToken: null,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case POST_SIGNIN: {
            console.log(action.payload,"ACTION")
            return {
                ...state,
                // user: action.payload,
                signIn:action.payload,
                isLoggedIn: true,
                accessToken: action.payload.accessToken
            }
        }
        case POST_USER:{
            return {
                ...state,
                user:action.payload,
                isLoggedIn: true,
            }
        }
        case GET_PROFILE: {
            return {
                ...state,
                user: action.payload,
            }
        }
        case LOG_OUT: {
            return {
                user:{},
                isLoggedIn: false
            }}
        case USER_ERROR: {
            return{
                ...state,
                userError:true,
            }
        }
        case USERS_ACTIVATION: {
            return {
                ...state,
                code:action.payload
            }
        }
        case USER_UPDATE: {
            console.log(action.payload,"HELLO")
            return {
                ...state,
                user:action.payload
            }
        }
        default:
            return state
    }
}