import ItemActionTypes from './item.types';

export const toggleItemWindow = () => ({
  type: ItemActionTypes.TOGGLE_PREVIEW_WINDOW,
})

export const setCurrentItem = item => ({
  type: ItemActionTypes.SET_CURRENT_ITEM,
  payload: item
})