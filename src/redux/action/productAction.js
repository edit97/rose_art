import {_urlProducts, _urlSlider, request} from "../api";
import {GET_PRODUCTS, GET_SLIDER,} from "../constants/index";

export const getProducts = () => {
    const reqData =  {
        url: _urlProducts,
        method: 'get',
        languageFlag: true,
    }
    return dispatch => {
      return request(reqData)
            .then(res => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res.data
                })
            })

    }
}

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


