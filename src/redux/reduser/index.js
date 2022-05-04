import {combineReducers} from "redux";

// import reducers
import products from "./productReduser";
import sliders from "./sliderReduser";
import subscribe from "./subscribeReduser"
import contacts from "./contactsReduser"

export default combineReducers({
    products,
    sliders,
    subscribe,
    contacts,
});
