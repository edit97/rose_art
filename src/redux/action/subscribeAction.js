import {_urlSubscribe, request} from "../api";

export const subscribeUser = (data) => {
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