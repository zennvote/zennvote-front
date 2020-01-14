import { combineReducers } from "redux";
import vote from './vote';

const rootReducer = combineReducers({
    vote,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;