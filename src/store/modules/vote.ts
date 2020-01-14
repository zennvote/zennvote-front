import { VoteData } from "../../entities/VoteData";

const CHANGE = 'vote/CHANGE' as const;

export const changeVote = (data: VoteData) => ({ type: CHANGE, payload: data });

type VoteAction =
    | ReturnType<typeof changeVote>;

const initialState: VoteData = {};

const vote = (state: VoteData = initialState, action: VoteAction) => {
    switch (action.type) {
        case 'vote/CHANGE':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default vote;