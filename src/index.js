import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router';
import history from './components/history';
import axios from 'axios';

import { Provider } from 'react-redux'
import setAuthorizationToken from './util/setAuthorizationToken';
import { setCurrentUser } from './redux/actions/userActions';
import jwt from 'jsonwebtoken'
import store from './redux/store';

axios.defaults.baseURL = "https://europe-west2-fit-in-line.cloudfunctions.net/api";

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} />
        <App />
    </Provider>, document.getElementById('root'));
