import { SET_PROFILE_POPUP, SET_PROFILE_SEARCH_RESULT } from '../actions/types'

const initialState = {
    profilePopup: "test",
    profileSearchResults: []
};

export default (state = initialState, action) => {

    switch(action.type) {
        case SET_PROFILE_SEARCH_RESULT:
            return {...state, profileSearchResults: action.results};
        case SET_PROFILE_POPUP:
            return {...state, profilePopup: action.state};
        default:
            return state;
    }

};