import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import uiReducer from './reducers/uiReducer';

import logger from 'redux-logger';

const initialState = {};

const middleware = applyMiddleware(thunk,logger);
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer
})

const store = createStore(
    reducers,
    initialState,
    reduxDevTools(middleware)
);

export default store;