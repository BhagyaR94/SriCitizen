import { combineReducers } from 'redux';
import NewsPaperReducer from './NewsPaperReducer';

console.log('NPR' + NewsPaperReducer);

export default combineReducers({
    news: NewsPaperReducer,
});