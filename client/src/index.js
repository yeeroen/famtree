import React from 'react';
import ReactDOM from 'react-dom';
import Router from './modules/core/base/Router';
import * as serviceWorker from './serviceWorker';
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';
import './assets/scss/main.scss';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
