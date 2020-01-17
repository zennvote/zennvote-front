import { polyfill as es6_promise } from 'es6-promise';
import { polyfill as array_fill } from './array-fill';
import { polyfill as array_includes } from './array-includes';
import { polyfill as assign } from './assign';
import { polyfill as object_entries } from './object-entries';
import { polyfill as object_keys } from './object-keys';

export const polyfill = () => {    
    es6_promise();
    array_fill();
    array_includes();
    assign();
    object_keys();
    object_entries();
}