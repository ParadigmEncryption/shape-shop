import { combineReducers } from 'redux';

import searchReducer from './search/search.reducer';
import itemReducer from './item/item.reducer';

export default combineReducers({
  search: searchReducer,
  item: itemReducer
});