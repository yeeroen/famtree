import axios from 'axios';
import { SET_PROFILE_POPUP, SET_PROFILE_SEARCH_RESULT } from './types';

export const setPopup = state => dispatch => {
    dispatch({type: SET_PROFILE_POPUP, state})
}

export const handleProfileCreation = data => async dispatch => {
    const res = await axios.post('/api/profile/create', data);
    dispatch({ type: SET_PROFILE_POPUP, state: ''});
}

export const loadProfiles = data => async dispatch => {
    const res = await axios.post('/api/profile/search', data);
    dispatch({ type: SET_PROFILE_SEARCH_RESULT, results: res.data});
}