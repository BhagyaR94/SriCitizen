import {
    REDUX_SAMPLE_ONE
} from '../actions/types';

const INITIAL_STATE = {
    redux_sample_one: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REDUX_SAMPLE_ONE:
            return {
                ...state,
                redux_sample_one: action.payload
            };
        default:
            return state;
    }
};