import {GET_DATA} from '../constants/constType';

export default function(state = [], action) {
    switch (action.type) {
        case GET_DATA: {
            console.log(action)
            return [action.payload.data, ...state]
        }
        default:
            return state
    }
}