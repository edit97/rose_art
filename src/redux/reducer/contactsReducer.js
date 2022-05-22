import {POST_CONTACTS} from "../constants";

export const initialState = {
    contacts:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
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