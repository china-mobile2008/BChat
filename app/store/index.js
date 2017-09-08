/*
 * @Author: Mr.Zhang 
 * @Date: 2017-09-08 10:38:29 
 * @Last Modified by: Mr.Zhang
 * @Last Modified time: 2017-09-08 15:25:25
 */

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import getReducers from './../reducers';

export default function getStore(navReducer) {
    return createStore(
        getReducers(navReducer),
        undefined,
        applyMiddleware(promiseMiddleware)
    );
}