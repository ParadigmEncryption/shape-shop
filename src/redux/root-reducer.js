import { combineReducers } from 'redux';

import searchReducer from './search/search.reducer';
import itemReducer from './item/item.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  search: searchReducer,
  item: itemReducer,
  cart: cartReducer
});