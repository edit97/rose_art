import {_urlFavorites, _urlPostFavorites, _urlProducts, _urlRemoveFavorites, _urlSlider, request} from "../api";
import {GET_FAVORITES, GET_PRODUCTS, GET_SLIDER, POST_FAVORITES, REMOVE_FAVORITES,} from "../constants/index";
import {stringify} from "query-string";

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

export const postFavorites = (data) => {
    const requestData =  {
        url:`${ _urlProducts}/${data}/add-to-favorites`,
        method:'post',
        data,
        customHeaders: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        token: true,
        languageFlag: true,
    }
    return dispatch => {
        return request(requestData)
            .then(result => {
                dispatch({
                    type: POST_FAVORITES,
                    payload: result.config.data
                })
            })

    }
}
export const removeFavorite = (data) => {
    const requestData =  {
        url: `${_urlProducts}/${data}/remove-from-favorites`,
        method: 'delete',
        data,
        customHeaders: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        token: true,
        languageFlag: true,
    }
    return dispatch => {
        return request(requestData)
            .then(result => {
                dispatch({
                    type: REMOVE_FAVORITES,
                    payload: result.config.data
                })
            })
    }
}

export const getFavorite = () => {
    const reqData =  {
        url: _urlFavorites,
        method: 'get',
        languageFlag: true,
        token: true,
    }
    return dispatch => {
        return request(reqData)
            .then(result => {
                dispatch({
                    type: GET_FAVORITES,
                    payload: result.data
                })
            })
    }
}


