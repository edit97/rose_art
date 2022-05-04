import { _urlSlider, request} from "../api";
import {GET_SLIDER} from "../constants/index";

export const getSlider = () => {
    const requestData =  {
        url: _urlSlider,
        method: 'get',
        languageFlag: true,
    }
    return dispatch => {
        return request(requestData)
            .then(result => {
                dispatch({
                    type: GET_SLIDER,
                    payload: result.data
                })
            })

    }
}