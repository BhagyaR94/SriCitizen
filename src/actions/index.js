import {
    REDUX_SAMPLE_ONE
} from './types';

export const getSampleOne = (input) => {

    return { type: REDUX_SAMPLE_ONE, payLoad: input };
  
  };