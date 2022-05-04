import { GET_SLIDER} from '../constants/index';

export const initialState = {
  sliders:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SLIDER: {
            return {
                ...state,
            sliders: action.payload
            }
        }
        default:
            return state
    }
}