import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import Reducer from './reduser';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    "key": 'root',
    storage,
    // "whitelist": ['auth', 'countries', 'cart']
};

let store;

const persistedReducer = persistReducer(persistConfig, Reducer);
// console.log(persistedReducer, 'persistedReducer');
store = createStore(persistedReducer,
    compose(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export {store, persistor};
