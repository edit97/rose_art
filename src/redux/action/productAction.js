import {GET_DATA} from "../constants/constType";
import axios from 'axios';
import request from "../api/request";

export const getData = (data) => {
    return {
        type: GET_DATA,
        payload: data
    }
}

