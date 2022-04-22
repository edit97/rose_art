import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
