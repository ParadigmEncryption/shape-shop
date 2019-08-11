import ItemActionTypes from './item.types';

export const toggleItemWindow = item => ({
  type: ItemActionTypes.TOGGLE_PREVIEW_WINDOW,
  payload: item
})

export const setCurrentItem = item => ({
  type: ItemActionTypes.SET_CURRENT_ITEM,
  payload: item
})