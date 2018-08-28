import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import createStore  from './store/configureStore'
import {Provider} from 'react-redux';
let store = createStore();
ReactDOM.render( <Provider store={store}>
    <App/>
</Provider> , document.getElementById('root'));
registerServiceWorker();
