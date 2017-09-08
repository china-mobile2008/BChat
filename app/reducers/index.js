/*
 * @Author: Mr.Zhang 
 * @Date: 2017-09-08 15:25:55 
 */
import { combineReducers } from 'redux';

import news from './news';
import categries from './category';

export default function getReducers(navReducer) {
    return combineReducers({
        news,
        categries,
        nav: navReducer
    });
}