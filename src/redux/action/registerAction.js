import {_urlContacts, _urlSubscribe, request} from "../api";

export const contactsUser = (data) => {
    const requestData =  {
        url: _urlContacts,
        method: 'post',
        data,
        languageFlag: true,
    }
    return dispatch => {
        return request(requestData)
    }
}

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