import {_urlActivation, request} from "../api";


export const usersActivation = (data) => {
    const requestData =  {
        url: _urlActivation,
        method: 'post',
        data,
    }
    return dispatch => {
        return request(requestData)
    }
}