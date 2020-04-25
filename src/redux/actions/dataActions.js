import {
    LOADING_DATA,
    SET_POSTS,
    POST_BLOG,
    DELETE_POST,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI
} from '../types';

import axios from 'axios';

export const getNews = () => dispatch => {
    dispatch({ type: LOADING_DATA })
    axios.get('/news')
        .then(res => {
            dispatch({
                type: SET_POSTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_POSTS,
                payload: []
            })
        })
}

export const postBlog = (newBlog) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.post('/news', newBlog)
        .then(res => {
            dispatch({
                type: POST_BLOG,
                payload: res.data
            });
            dispatch({ type: CLEAR_ERRORS });
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}