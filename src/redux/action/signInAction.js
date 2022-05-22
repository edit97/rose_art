import {_urlAunt, request} from "../api";
import {stringify} from "query-string";
import {GET_PRODUCTS, POST_SIGNIN} from "../constants";


export const signIn = (data) => {
    const requestData =  {
        url: _urlAunt,
        method: 'post',
        data:stringify(data),
        customHeaders: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        languageFlag: true,
    }
    return dispatch => {
        return request(requestData)
            .then(result => {
                dispatch({
                    type: POST_SIGNIN,
                    payload: result.data
                })
            })
            .catch(error => {
                dispatch({
                    type:POST_SIGNIN,
                    payload:error.data
                })
            })
    }
}
