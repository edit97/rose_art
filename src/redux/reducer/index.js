import {combineReducers} from "redux";

// import reducers
import products from "./productReducer";
import register from "./registerReduser";
import auth from "./authReducer";

export default combineReducers({
    products,
    register,
    auth,
});
