import {POST_CONTACTS, POST_SUBSCRIBE} from '../constants';

export const initialState = {
    subscribe:{},
    contacts:{},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_SUBSCRIBE: {
            return {
                ...state,
                subscribe:action.payload
            }
        }
        case POST_CONTACTS: {
            return {
                ...state,
                contacts:action.payload
            }
        }
        default:
            return state
    }
}