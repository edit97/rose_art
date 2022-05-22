import {initialState as products} from "../reducer/productReducer";
import {initialState as sliders} from "../reducer/sliderReducer";
import {initialState as subscribe} from "../reducer/subscribeReducer";
import {initialState as contacts} from "../reducer/contactsReducer";
import {initialState as  users} from "../reducer/userReducer";
import {initialState as signIn} from "../reducer/signInReducer";
import {initialState as  code} from "../reducer/activationReducer";
import {initialState as isLoggedIn }from "../reducer/logeDoneReducer";

const reducers = {
    products,
    sliders,
    subscribe,
    contacts,
    users,
    signIn,
    code,
    isLoggedIn,
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

