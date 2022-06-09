import axios from "axios";
import {store} from "../store";

export const request = ({
                            url,
                            method = "GET",
                            data = null,
                            token = false,
                            customHeaders = null,
                            languageFlag = false,
                            newToken = null
                        }) => {
    const storeAccessToken = store.getState().auth.accessToken;
    const accessToken = newToken || storeAccessToken;
    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    };
    customHeaders && (headers = {...headers, ...customHeaders});
    token && accessToken && (headers["x-access-token"] = accessToken);
    // console.log(accessToken,"Token")
    let language = store.getState()?.general?.selectedLanguage;
    if (languageFlag) {
        headers["Accept-Language"] = language?.code ?? 'en'
    }
    const requestData = {
        url: url,
        method: method,
        headers: headers,
    };

    data && (requestData.data = data);

    return axios.request(requestData)
};
