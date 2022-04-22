import axios from "axios";
import {_urlProducts} from "./url";

export function request ({
    url=,
        method= 'get',
                         }) {
        return (dispatch) => {
            axios.get(_urlProducts)
                .then(response => {
                    dispatch(request(response.data));
                })
                .catch(error => {
                    console.log(error)
                })
        }
}
