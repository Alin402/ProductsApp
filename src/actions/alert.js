import { 
    ADD_ALERT,
    REMOVE_ALERT
} from './types';

const uuid = require('uuid');

export const addAlert = (msg, type) => dispatch => {

    const id = uuid.v4();

    dispatch({
        type: ADD_ALERT,
        payload: {
            msg, type, id
        }
    });

    setTimeout(() => {
        dispatch({
            type: REMOVE_ALERT,
            payload: id
        });
    }, 4000);
}