import {initialState as products} from "../reduser/productReduser";
import {initialState as sliders} from "../reduser/sliderReduser";
import {initialState as subscribe} from "../reduser/subscribeReduser";
import {initialState as contacts} from "../reduser/contactsReduser";

const reducers = {
    products,
    sliders,
    subscribe,
    contacts,
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

