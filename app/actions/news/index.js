/*
 * @Author: Mr.Zhang 
 * @Date: 2017-09-08 15:36:00 
 */
import {
    FETCH_NEWS_LIST
} from './../../constants/actionTypes.js';

import { createAction } from 'redux-actions';

const thumbnail = 'https://facebook.github.io/react/img/logo_og.png';

export var fetchNewsList = createAction(FETCH_NEWS_LIST, () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
        return {
            id: item,
            title: `[${item}]夏季又要到，做好防脱准备很重要`,
            thumbnail: thumbnail,
            desc: '室内干燥，室外气温高，春夏季对于需要带状的上班族来说就是压力山大。'
        }
    });
});