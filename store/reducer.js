import {SAVE_LISTUSERS, SAVE_USER } from './constants';

const defaultState = {
    users: [],
    user: {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_LISTUSERS:
            return {
                ...state,
                users: action.users
            }
        case SAVE_USER:
            return {
                ...state,
                user: action.user
            }
        default: {
            return state
            }
    }
}
export default reducer;