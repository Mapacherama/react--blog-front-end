import { combineReducers } from 'redux';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
  blogs: blogReducer,
  // add other reducer slices here
});

export default rootReducer;
