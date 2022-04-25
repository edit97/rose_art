import {initialState as product} from "../reduser/productReduser";

const reducers = {
    product,
};
export default state => {
    const sData = {};
    Object.keys(reducers).forEach(selectorKey => {
        Object.keys(reducers[selectorKey]).forEach(key => {
            sData[key] = state[selectorKey][key];
        });
    });
    return sData;
};

