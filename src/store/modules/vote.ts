import { VoteData } from "../../entities/VoteData";

type Action = { type: 'vote/CHANGE', data: VoteData }

export const voteReducer = (state: VoteData = {}, action: Action): VoteData => {
    switch (action.type) {
        case 'vote/CHANGE':
            return { ...state, ...action.data };
        default:
            return state;
    }
};