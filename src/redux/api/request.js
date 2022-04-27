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
    const accessToken = newToken;
    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    };
    customHeaders && (headers = {...headers, ...customHeaders});
    token && accessToken && (headers["x-access-token"] = accessToken);
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
