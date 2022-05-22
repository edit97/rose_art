import {POST_SIGNIN} from '../constants/index';

export const initialState = {
    signIn:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_SIGNIN: {
            return {
                ...state,
                signIn:action.payload
            }
        }
        default:
            return state
    }
}