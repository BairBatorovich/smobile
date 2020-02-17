import {SAVE_LISTUSERS, SAVE_USER } from './constants';

export const saveListusers = (users) => {  
    return {
        type: SAVE_LISTUSERS,
        users
    } 
};

export const saveUser = (user) => {  
    return {
        type: SAVE_USER,
        user
    } 
};
