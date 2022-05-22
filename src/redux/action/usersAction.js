import {_urlUsers, request} from "../api";
import {POST_USER} from "../constants";


export const usersSignUp = (data) => {
    const requestData =  {
        url: _urlUsers,
        method: 'post',
        data,
        languageFlag: true,
    }
    return dispatch => {
        return request(requestData)
            .then(err => {
                dispatch({
                    type:POST_USER,
                    payload:err.data,
                })
            })
    }
}