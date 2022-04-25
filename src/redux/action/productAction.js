import {GET_DATA} from "../constants/constType";

export const getData = (data) => {
    return {
        type: GET_DATA,
        payload: data
    }
}

