import ItemActionTypes from './item.types';

export const setCurrentItem = item => ({
  type: ItemActionTypes.SET_CURRENT_ITEM,
  payload: item
})