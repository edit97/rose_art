import {_urlSubscribe, request} from "../api";

export const subscribeUser = (data) => {
    console.log(data,'ffff')
    const requestData =  {
        url: _urlSubscribe,
        method: 'post',
        data,
        languageFlag: true,
    }
    return dispatch => {
        return request(requestData)
    }
}