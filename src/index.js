import React from 'react';

import ReactDOM from 'react-dom';

import './modules/rem'

import './modules/request'

import 'swiper/dist/css/swiper.min.css'

import App from './components/App';

import './stylesheets/main.scss';

import {
    BrowserRouter as Router
} from  'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'

import store from './store'

ReactDOM.render(
    <Provider store = { store }>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
