import {_urlProducts, request} from "../api";
import {GET_PRODUCTS, LOG_OUT} from "../constants/index";

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


