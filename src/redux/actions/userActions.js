import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, LOADING_USER, SET_UNAUTHENTICATED, SET_POSTS, SET_CURRENT_USER } from '../types';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../../util/setAuthorizationToken';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/login', userData)
        .then((res) => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
            dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS })
            history.push('/');
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.data
            })
        })
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('jwtToken')
    delete axios.defaults.headers.common['Authorization']
    dispatch({ type: SET_UNAUTHENTICATED })
}


export function setCurrentUser(user) {
    return {
        type: SET_USER,
        user
    }
}

export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER })
    axios.get('/user')
        .then((res) => {
            dispatch({
                type: SET_USER,
                user: res.data
            })
        })
        .catch(err => {
            console.error(err);
        })
}