/*
 * @Author: Mr.Zhang 
 * @Date: 2017-09-08 15:27:14 
 */
import {
    FETCH_NEWS_LIST
} from './../../constants/actionTypes.js';

import { handleActions } from 'redux-actions';

export default handleActions({
    [FETCH_NEWS_LIST]: {
        next(state, action) {
            return { ret: true, data: action.payload };
        },
        throw(state, action) {
            return { ret: false, statusText: action.payload, data: [] };
        }
    }
}, { ret: true, statusText: '', data: [] });