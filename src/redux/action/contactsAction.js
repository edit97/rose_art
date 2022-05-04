import {_urlContacts, request} from "../api";

export const contactsUser = (data) => {
    console.log(data,'ffff')
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