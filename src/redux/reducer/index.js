import {combineReducers} from "redux";

// import reducers
import products from "./productReducer";
import sliders from "./sliderReducer";
import subscribe from "./subscribeReducer";
import contacts from "./contactsReducer";
import users from "./userReducer";
import signIn from "./signInReducer"
import code from "./activationReducer"
import isLoggedIn from "./logeDoneReducer"

export default combineReducers({
    products,
    sliders,
    subscribe,
    contacts,
    users,
    signIn,
    code,
    isLoggedIn,
});
