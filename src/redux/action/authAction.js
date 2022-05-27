import {_urlActivation, _urlAunt, _urlProfile, _urlUsers, _urlUserUpdate, request} from "../api";
import {stringify} from "query-string";
import {GET_PROFILE, LOG_OUT, POST_SIGNIN, POST_USER, USER_ERROR, USER_UPDATE} from "../constants";


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
    }
}

export const logOut = () => {
    return{
        type:LOG_OUT,
    }
}

export const userProfile = () => {
    const reqData =  {
        url: _urlProfile,
        method: 'get',
        languageFlag: true,
        token: true,
    }
    return dispatch => {
        return request(reqData)
            .then(res => {
                dispatch({
                    type:GET_PROFILE,
                    payload:res.data
                })
            })
    }
}

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
            .catch(error => {
                dispatch({
                    type:USER_ERROR,
                    payload:error
                })
            });
    }
}

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

export const usersUpdate = (data) => {
    const requestData =  {
        url: _urlUserUpdate,
        method: 'patch',
        data:stringify(data),
        customHeaders: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        token: true,
        languageFlag: true,
    }
    return dispatch => {
        return request(requestData)
            .then(({data}) => {
                console.log(data,'RESULT')
                dispatch({
                    type:USER_UPDATE,
                    payload:data,
                })
            })
    }
}