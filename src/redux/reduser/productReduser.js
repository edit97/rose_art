import {GET_DATA} from '../constants/constType';

export const initialState = {
    products: ['hhh'],
};


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            // console.log(action)
            // return [action.payload.data, ...state]
        }
        default:
            return state
    }
}