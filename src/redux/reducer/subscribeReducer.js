import { POST_SUBSCRIBE} from '../constants/index';

export const initialState = {
    subscribe:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_SUBSCRIBE: {
            return {
                ...state,
                subscribe:action.payload
            }
        }
        default:
            return state
    }
}