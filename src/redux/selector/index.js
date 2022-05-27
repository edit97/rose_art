import {initialState as products} from "../reducer/productReducer";
import {initialState as register} from "../reducer/registerReduser";
import {initialState as auth}from "../reducer/authReducer";

const reducers = {
    products,
   register,
    auth,
}
export default state => {
    const sData = {};
    Object.keys(reducers).forEach(selectorKey => {
        Object.keys(reducers[selectorKey]).forEach(key => {
            sData[key] = state[selectorKey][key];
        });
    });
    return sData;
};

