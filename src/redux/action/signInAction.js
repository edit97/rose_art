import {_urlAunt, request} from "../api";
import {stringify} from "query-string";
import {GET_PRODUCTS, LOG_OUT, POST_SIGNIN} from "../constants";


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
                console.log(result,'lllll')
                dispatch({
                    type: POST_SIGNIN,
                    payload: result.data
                })
            })}
}
 export const logOut = () => {
    return{
        type:LOG_OUT,
    }
 }