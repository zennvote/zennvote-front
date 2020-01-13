import { polyfill as es6_promise } from 'es6-promise';
import { polyfill as array_fill } from './array-fill';
import { polyfill as assign } from './assign';

export const polyfill = () => {    
    es6_promise();
    array_fill();
    assign();
}