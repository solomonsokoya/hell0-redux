import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import {store} from './store';
import registerServiceWorker from './registerServiceWorker';

const Dom = (
  <Provider store = {store}>
    <App/>
  </Provider>
)
ReactDOM.render(Dom, document.getElementById("root"));
registerServiceWorker();
