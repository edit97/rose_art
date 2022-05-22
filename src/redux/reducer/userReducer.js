import {POST_USER} from '../constants/index';

export const initialState = {
    users:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_USER: {
            return {
                ...state,
                users:action.payload
            }
        }
        default:
            return state
    }
}