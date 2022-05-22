import { USERS_ACTIVATION} from '../constants/index';

export const initialState = {
    code:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USERS_ACTIVATION: {
            return {
                ...state,
                code:action.payload
            }
        }
        default:
            return state
    }
}