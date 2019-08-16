import ItemActionTypes from './item.types';

export const setCurrentItem = item => ({
  type: ItemActionTypes.SET_CURRENT_ITEM,
  payload: item
})

export const rotateItem = item => ({
  type: ItemActionTypes.ROTATE_ITEM,
  payload: item
})