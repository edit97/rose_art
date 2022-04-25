import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import reportWebVitals from './reportWebVitals';
import {persistor, store} from "./redux/store";
// import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);


reportWebVitals();
