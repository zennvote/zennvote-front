import { combineReducers } from "redux";
import { VoteData } from "../../entities/VoteData";
import { voteReducer as votes } from './vote';

export interface StoreState {
    votes: VoteData;
}

export default combineReducers<StoreState>({
    votes,
});